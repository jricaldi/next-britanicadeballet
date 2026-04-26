export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DanceSchool',
    name: 'Academia Británica de Ballet',
    description:
      'Formando bailarinas desde 1956 en Lima, Surco. Clases de ballet clásico, danza contemporánea, piano, canto, violín y musicoterapia.',
    url: 'https://www.britanicadeballet.com',
    logo: 'https://www.britanicadeballet.com/logo.png',
    image: 'https://www.britanicadeballet.com/opengraph-image.jpg',
    telephone: '+5114481113',
    email: 'britanicaballet@gmail.com',
    foundingDate: '1956',
    foundingLocation: {
      '@type': 'Place',
      name: 'Lima',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Alfredo Franco 200, Urb. Chama',
      addressLocality: 'Santiago de Surco',
      addressRegion: 'Lima',
      addressCountry: 'PE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -12.13133,
      longitude: -76.99809,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/britanicadeballet',
      'https://www.instagram.com/britanicadeballet/',
      'https://www.youtube.com/c/Britanicadeballet',
    ],
    knowsAbout: [
      'Ballet clásico',
      'Danza contemporánea',
      'Piano',
      'Canto',
      'Violín',
      'Musicoterapia',
      'Tap',
    ],
    inLanguage: 'es',
    priceRange: '$$',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
