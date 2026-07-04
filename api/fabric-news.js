// ── Vercel Serverless — Textile Industry News Feed ───────────────────────────
// Route: GET /api/fabric-news
// Fetches RSS XML directly — no third-party service dependency
// Caches 2 hours on Vercel edge

const RSS_FEEDS = [
  { url: 'https://www.fibre2fashion.com/rss/',          source: 'Fibre2Fashion',       defaultCat: 'Industry'    },
  { url: 'https://www.textileworld.com/feed/',           source: 'Textile World',       defaultCat: 'Technology'  },
  { url: 'https://www.just-style.com/feed/',             source: 'Just Style',          defaultCat: 'Sourcing'    },
  { url: 'https://www.textiletoday.com.bd/feed/',        source: 'Textile Today',       defaultCat: 'Industry'    },
  { url: 'https://www.voguebusiness.com/feed',           source: 'Vogue Business',      defaultCat: 'Industry'    },
  { url: 'https://www.businessoffashion.com/feed/',      source: 'Business of Fashion', defaultCat: 'Industry'    },
  { url: 'https://wazir.in/feed/',                       source: 'Wazir Advisors',      defaultCat: 'Sourcing'    },
];

// Category colours — keep in sync with frontend CAT_COLORS
const CAT_COLORS = {
  Technology:    '#00f2fe',
  Sustainability:'#4db87a',
  Sourcing:      '#f0c94e',
  Industry:      '#e06b5a',
};

// Broad keyword list — any textile/fashion-adjacent article passes
const PASS_KEYWORDS = [
  'fiber','fibre','fabric','yarn','textile','garment','cotton','polyester',
  'recycled','sustainable','organic','knit','woven','innovation','technology',
  'supply chain','sourcing','dyeing','spinning','weaving','finishing','nylon',
  'viscose','linen','wool','synthetic','biodegradable','circular','gots','bci',
  'tencel','modal','lyocell','elastane','denim','jersey','fleece','interlock',
  'fashion','apparel','retail','brand','collection','trend','manufacturing',
  'factory','supplier','import','export','clothing','footwear','leather',
];

// ── Category assignment — TITLE ONLY (never description) ──────────────────────
// Using description caused cross-category bleed (e.g. Tech articles mentioning
// "sustainable" in body text getting wrongly tagged as Sustainability)
function categorise(title, feedDefault) {
  const t = title.toLowerCase();
  if (/sustain|recycl|organic|circular|carbon|gots|bci|eco\b|ecovero|biodeg|certif|green\b/i.test(t))
    return 'Sustainability';
  if (/technolog|innovat|3d print|automat|software|artificial intel|ai-driven|machine learn|digital|robot/i.test(t))
    return 'Technology';
  if (/sourc|supply chain|bangladesh|vietnam|^.*india\b|china\b|turkey\b|cambodia|pakistan|sri lanka|factory|vendor|supplier|import|export|nearshoring/i.test(t))
    return 'Sourcing';
  return feedDefault || 'Industry';
}

// ── Simple inline RSS XML parser (zero dependencies) ─────────────────────────
function extractTag(block, tag) {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m  = block.match(re);
  if (!m) return '';
  return m[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#[0-9]+;/g,' ')
    .replace(/\s+/g,' ').trim();
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
      link,
      pubDate:     extractTag(blk, 'pubDate') || extractTag(blk, 'dc:date') || '',
      description: extractTag(blk, 'description') || extractTag(blk, 'content:encoded') || '',
      thumbnail,
    });
  }
  return items;
}

// ── Handler ────────────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  // 2-hour edge cache so daily articles stay fresh
  res.setHeader('Cache-Control', 'public, s-maxage=7200, stale-while-revalidate=3600');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const FOURTEEN_DAYS = 14 * 24 * 60 * 60 * 1000;
  const cutoff = Date.now() - FOURTEEN_DAYS;

  const results = await Promise.allSettled(
    RSS_FEEDS.map(async (feed) => {
      try {
        const ctrl = new AbortController();
        const tid  = setTimeout(() => ctrl.abort(), 10000);
        const resp = await fetch(feed.url, {
          signal: ctrl.signal,
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; Textile3D-NewsBot/1.0; +https://textile3d.in)',
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
            // Only keep articles from last 14 days
            const pub = item.pubDate ? new Date(item.pubDate).getTime() : 0;
            if (pub && pub < cutoff) return false;
            // Must be textile/fashion adjacent
            const text = `${item.title} ${item.description}`.toLowerCase();
            return PASS_KEYWORDS.some(kw => text.includes(kw));
          })
          .map(item => {
            const cat  = categorise(item.title, feed.defaultCat);
            const desc = item.description.slice(0, 230) + (item.description.length > 230 ? '…' : '');
            return {
              id:            Buffer.from((item.link || item.title).slice(0, 60)).toString('base64').replace(/[^a-z0-9]/gi,'').slice(0,16),
              title:         item.title,
              description:   desc,
              link:          item.link || '#',
              pubDate:       item.pubDate || new Date().toISOString(),
              source:        feed.source,
              category:      cat,
              categoryColor: CAT_COLORS[cat] || '#e06b5a',
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
    .slice(0, 60);

  return res.status(200).json({ articles, total: articles.length, fetchedAt: new Date().toISOString() });
}
