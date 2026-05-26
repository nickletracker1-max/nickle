import Head from "next/head";
import { useRouter } from "next/router";
import {
  SITE_URL,
  SITE_NAME,
  SITE_LOGO,
  FAVICON_ICO,
  FAVICON_16,
  FAVICON_32,
  APPLE_TOUCH_ICON,
} from "@/lib/siteConfig";

const SEO = ({ title, description, keywords, canonicalUrl }) => {
  const { asPath } = useRouter();
  const canonical = canonicalUrl || `${SITE_URL}${asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={SITE_LOGO} />
      <meta property="og:image:alt" content={`${SITE_NAME} Logo`} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SITE_LOGO} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Favicons */}
      <link rel="icon" href={FAVICON_ICO} sizes="any" />
      <link rel="icon" type="image/png" sizes="16x16" href={FAVICON_16} />
      <link rel="icon" type="image/png" sizes="32x32" href={FAVICON_32} />
      <link rel="apple-touch-icon" href={APPLE_TOUCH_ICON} />
      <link rel="manifest" href="/site.webmanifest" />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          logo: SITE_LOGO,
          description,
        })}
      </script>
    </Head>
  );
};

export default SEO;
