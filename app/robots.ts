import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const url = process.env.DEPLOY_URL || 'https://www.britanicadeballet.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${url}/sitemap.xml`,
  }
}
