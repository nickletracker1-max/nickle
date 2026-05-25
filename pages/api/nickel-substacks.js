/**
 * /api/nickel-substacks
 * Fetches and merges RSS feeds from nickel/metals-focused Substack publications.
 * Parsed server-side to avoid CORS issues.
 */

const FEEDS = [
  { name: "Non Ferrous Flows", url: "https://nonferrousflows.substack.com/feed", color: "#A8956A" },
  { name: "Green Rocks",       url: "https://greenrocks.substack.com/feed",       color: "#22c55e" },
  { name: "Power Metal",       url: "https://powermetal.substack.com/feed",        color: "#3b82f6" },
];

/** Minimal XML parser — extracts <item> blocks from an RSS feed string */
function parseRSS(xml, sourceName) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];

    const get = (tag) => {
      // Handle CDATA and plain text
      const re = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`, "i");
      const m = re.exec(block);
      return m ? m[1].trim() : "";
    };

    const title   = get("title");
    const link    = get("link") || get("guid");
    const pubDate = get("pubDate");
    const desc    = get("description");

    // Extract thumbnail from <media:content> or <enclosure> or first <img> in description
    let thumbnail = "";
    const mediaMatch = block.match(/media:content[^>]+url="([^"]+)"/i)
      || block.match(/enclosure[^>]+url="([^"]+)"/i)
      || desc.match(/<img[^>]+src="([^"]+)"/i);
    if (mediaMatch) thumbnail = mediaMatch[1];

    // Strip HTML from description for plain text excerpt
    const excerpt = desc
      .replace(/<[^>]*>/g, " ")
      .replace(/&[a-z]+;/gi, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 120);

    if (title && link) {
      items.push({
        source: sourceName,
        title,
        url: link.replace(/^.*?(https?:\/\/)/, "$1"), // clean up any leading text before URL
        date: pubDate ? new Date(pubDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "",
        rawDate: pubDate ? new Date(pubDate).getTime() : 0,
        excerpt,
        thumbnail,
      });
    }
  }

  return items;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Cache for 10 minutes
  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=300");

  const results = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      const response = await fetch(feed.url, {
        headers: { "User-Agent": "NickelMetalTracker/1.0 RSS Reader" },
        signal: AbortSignal.timeout(8000),
      });
      if (!response.ok) throw new Error(`${feed.name}: HTTP ${response.status}`);
      const xml = await response.text();
      return parseRSS(xml, feed.name);
    })
  );

  // Merge all successful feeds, sort by date descending, return top 8
  const allItems = results
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => r.value)
    .sort((a, b) => b.rawDate - a.rawDate)
    .slice(0, 8)
    .map(({ rawDate, ...item }) => item); // strip internal sort key

  if (allItems.length === 0) {
    return res.status(503).json({ message: "All RSS feeds failed", items: [] });
  }

  return res.status(200).json({ items: allItems });
}
