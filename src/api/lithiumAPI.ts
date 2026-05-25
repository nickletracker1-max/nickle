export const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASEURL ||
  "https://lithiumdjango-production.up.railway.app";

// ── Home & News ──────────────────────────────────────────────────────────────
export const LITHIUM_NEWS = `${BASE_URL}/api/lithium_news/`;
export const SPORT_PRICE_CHART = `${BASE_URL}/api/spot-price-chart/`;

// Local Next.js API routes (proxy to DB)
export const LITHIUM_PRICES = "/api/lithium-prices";
export const COPPER_PRICES = "/api/copper-prices";
export const PRESS_RELEASE = "/api/press-releases";
export const STOCK_NEWS = "/api/stock-news";
export const GENERAL_NEWS = "/api/general-news/";
export const SUBSTACKS = "/api/substacks";

// ── Investments ──────────────────────────────────────────────────────────────
export const MOST_FOLLOWED = "/api/most-followed";
export const LITHIUM_STOCK_DETAIL = `${BASE_URL}/api/lithium-stock-detail/`;
export const STOCK_SCREENER = "/api/stock-metrics";
export const FOLLOWED_STOCKS = `${BASE_URL}/api/followed-stocks/`;
export const INSIDER_TRANSACTIONS = "/api/insider-transactions";

// ── Videos ───────────────────────────────────────────────────────────────────
export const VIDEOS = "/api/youtube-videos";

// ── Calendar ─────────────────────────────────────────────────────────────────
export const CALENDAR = `${BASE_URL}/api/calendar-events`;

// ── Community ────────────────────────────────────────────────────────────────
export const FORUM_POSTS = `${BASE_URL}/community/api/forum/posts/`;
