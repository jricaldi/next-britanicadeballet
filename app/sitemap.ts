import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.DEPLOY_URL || 'https://www.britanicadeballet.com'

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
