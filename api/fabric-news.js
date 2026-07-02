// ── Vercel Serverless — Textile Industry News Feed ───────────────────────────
// Route: GET /api/fabric-news
// Aggregates RSS from 4 textile news sources, filters by keyword, caches 1 hr

const RSS_FEEDS = [
  { url: 'https://www.fibre2fashion.com/rss/',         source: 'Fibre2Fashion', category: 'Industry',      color: '#4db87a' },
  { url: 'https://www.textileworld.com/feed/',          source: 'Textile World', category: 'Technology',    color: '#00f2fe' },
  { url: 'https://www.just-style.com/feed/',            source: 'Just Style',    category: 'Sourcing',      color: '#f0c94e' },
  { url: 'https://www.textiletoday.com.bd/feed/',       source: 'Textile Today', category: 'Industry',      color: '#e06b5a' },
];

const KEYWORDS = [
  'fiber','fibre','fabric','yarn','textile','garment','cotton','polyester',
  'recycled','sustainable','organic','knit','woven','innovation','technology',
  'supply chain','sourcing','dyeing','spinning','weaving','finishing','nylon',
  'viscose','linen','wool','synthetic','biodegradable','circular','gots','bci',
  'tencel','modal','lyocell','elastane','denim','jersey','fleece','interlock',
];

function stripHtml(str = '') {
  return str.replace(/<[^>]*>/g, '').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const results = await Promise.allSettled(
    RSS_FEEDS.map(async (feed) => {
      try {
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}&count=25`;
        const controller = new AbortController();
        const tid = setTimeout(() => controller.abort(), 8000);
        const resp = await fetch(apiUrl, { signal: controller.signal });
        clearTimeout(tid);
        const data = await resp.json();
        if (data.status !== 'ok' || !Array.isArray(data.items)) return [];

        return data.items
          .filter(item => {
            const text = `${item.title} ${item.description || ''}`.toLowerCase();
            return KEYWORDS.some(kw => text.includes(kw));
          })
          .map(item => {
            const desc = stripHtml(item.description || '');
            return {
              id:            Buffer.from((item.link || item.title || '').slice(0, 60)).toString('base64').replace(/[^a-z0-9]/gi,'').slice(0,16),
              title:         (item.title || '').trim(),
              description:   desc.slice(0, 230) + (desc.length > 230 ? '…' : ''),
              link:          item.link || '#',
              pubDate:       item.pubDate || new Date().toISOString(),
              source:        feed.source,
              category:      feed.category,
              categoryColor: feed.color,
              thumbnail:     item.thumbnail || item.enclosure?.link || null,
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
    .slice(0, 40);

  return res.status(200).json({ articles, total: articles.length, fetchedAt: new Date().toISOString() });
}
