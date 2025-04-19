/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mejorar la optimización de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    // Si tienes dominios externos para imágenes, agrega:
    // domains: ['ejemplo.com'],
  },
  // Mejorar el rendimiento de construcción con Turbopack (alpha)
  experimental: {
    // Para desarrollo (opcional)
    // turboDev: true,
    // Si quieres usar Turbopack para builds (alpha)
    // turboBuild: true,
    // Para un bundle más pequeño
    optimizeCss: true,
    // Si vas a implementar Node.js middleware (experimental)
    // nodeMiddleware: true,
  },
  // Configuración de headers para mejores prácticas de seguridad
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
