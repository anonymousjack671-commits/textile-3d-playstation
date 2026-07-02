// ── Vercel Serverless — Textile Industry News Feed ───────────────────────────
// Route: GET /api/fabric-news
// Fetches RSS XML directly — no third-party service dependency
// Caches 1 hour on Vercel edge

const RSS_FEEDS = [
  { url: 'https://www.fibre2fashion.com/rss/',          source: 'Fibre2Fashion',       category: 'Industry',    color: '#4db87a' },
  { url: 'https://www.textileworld.com/feed/',           source: 'Textile World',       category: 'Technology',  color: '#00f2fe' },
  { url: 'https://www.just-style.com/feed/',             source: 'Just Style',          category: 'Sourcing',    color: '#f0c94e' },
  { url: 'https://www.textiletoday.com.bd/feed/',        source: 'Textile Today',       category: 'Industry',    color: '#e06b5a' },
  { url: 'https://www.voguebusiness.com/feed',           source: 'Vogue Business',      category: 'Industry',    color: '#c084fc' },
  { url: 'https://www.businessoffashion.com/feed/',      source: 'Business of Fashion', category: 'Industry',    color: '#818cf8' },
  { url: 'https://wazir.in/feed/',                       source: 'Wazir Advisors',      category: 'Sourcing',    color: '#f0c94e' },
];

const KEYWORDS = [
  'fiber','fibre','fabric','yarn','textile','garment','cotton','polyester',
  'recycled','sustainable','organic','knit','woven','innovation','technology',
  'supply chain','sourcing','dyeing','spinning','weaving','finishing','nylon',
  'viscose','linen','wool','synthetic','biodegradable','circular','gots','bci',
  'tencel','modal','lyocell','elastane','denim','jersey','fleece','interlock',
  'fashion','apparel','retail','brand','collection','luxury','trend','designer',
  'manufacturing','factory','supplier','cost','price','sustainability',
];

// ── Simple inline XML parser (no dependencies) ────────────────────────────────
function extractTag(block, tag) {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = block.match(re);
  if (!m) return '';
  return m[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#[0-9]+;/g,' ')
    .replace(/\s+/g, ' ').trim();
}

function extractAttr(block, pattern) {
  const m = block.match(pattern);
  return m ? m[1].trim() : null;
}

function parseRSS(xml) {
  const items = [];
  const re = /<item[\s>]([\s\S]*?)<\/item>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const blk = m[1];
    const link = extractAttr(blk, /<link[^>]*>([^<\s]+)<\/link>/i)
              || extractAttr(blk, /<link[^>]+href="([^"]+)"/i)
              || '';
    const thumbnail = extractAttr(blk, /<media:thumbnail[^>]+url="([^"]+)"/i)
                   || extractAttr(blk, /<media:content[^>]+url="([^"]+)"/i)
                   || extractAttr(blk, /<enclosure[^>]+url="([^"]+)"/i)
                   || null;
    items.push({
      title:       extractTag(blk, 'title'),
      link:        link,
      pubDate:     extractTag(blk, 'pubDate') || extractTag(blk, 'dc:date') || new Date().toISOString(),
      description: extractTag(blk, 'description') || extractTag(blk, 'content:encoded') || '',
      thumbnail,
    });
  }
  return items;
}

function categorise(title, desc, defaultCat) {
  const t = (title + ' ' + desc).toLowerCase();
  if (/sustain|recycl|organic|circular|carbon|gots|bci|eco|green|certif/i.test(t)) return 'Sustainability';
  if (/technolog|innovat|machine|digital|3d|automat|software|ai |artific/i.test(t)) return 'Technology';
  if (/sourc|supply chain|bangladesh|vietnam|india|china|turkey|cambodia|factory|vendor|supplier/i.test(t)) return 'Sourcing';
  return defaultCat || 'Industry';
}

// ── Handler ────────────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const results = await Promise.allSettled(
    RSS_FEEDS.map(async (feed) => {
      try {
        const ctrl = new AbortController();
        const tid  = setTimeout(() => ctrl.abort(), 10000);
        const resp = await fetch(feed.url, {
          signal: ctrl.signal,
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; Textile3D-NewsBot/1.0)',
            'Accept': 'application/rss+xml, application/xml, text/xml, */*',
          },
        });
        clearTimeout(tid);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const xml = await resp.text();
        const raw = parseRSS(xml);

        return raw
          .filter(item => {
            if (!item.title) return false;
            const t = `${item.title} ${item.description}`.toLowerCase();
            return KEYWORDS.some(kw => t.includes(kw));
          })
          .map(item => {
            const desc = item.description.slice(0, 230) + (item.description.length > 230 ? '…' : '');
            const cat  = categorise(item.title, item.description, feed.category);
            return {
              id:            Buffer.from((item.link || item.title).slice(0, 60)).toString('base64').replace(/[^a-z0-9]/gi,'').slice(0,16),
              title:         item.title,
              description:   desc,
              link:          item.link || '#',
              pubDate:       item.pubDate,
              source:        feed.source,
              category:      cat,
              categoryColor: feed.color,
              thumbnail:     item.thumbnail,
            };
          });
      } catch (e) {
        console.error(`[fabric-news] ${feed.source} failed:`, e.message);
        return [];
      }
    })
  );

  const seen = new Set();
  const articles = results
    .filter(r => r.status === 'fulfilled')
    .flatMap(r => r.value)
    .filter(a => {
      if (!a.title || seen.has(a.title)) return false;
      seen.add(a.title);
      return true;
    })
    .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    .slice(0, 50);

  return res.status(200).json({ articles, total: articles.length, fetchedAt: new Date().toISOString() });
}
