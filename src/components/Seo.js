import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig, pageMeta } from '../seo/seoConfig';

const Seo = ({ page, canonical, children, schema }) => {
  const meta = pageMeta[page] || pageMeta.home;
  const canonicalUrl = canonical || `${siteConfig.canonicalBaseUrl}/`;

  return (
    <>
      <Helmet>
        <title>{`${meta.title} | ${siteConfig.siteName}`}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={siteConfig.keywords.join(', ')} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${meta.title} | ${siteConfig.siteName}`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={siteConfig.siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${meta.title} | ${siteConfig.siteName}`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="theme-color" content="#0f172a" />
        {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
      </Helmet>
      {children}
    </>
  );
};

export default Seo;
