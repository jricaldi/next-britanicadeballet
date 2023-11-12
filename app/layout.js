import { Libre_Baskerville } from 'next/font/google'
import { GoogleAnalytics } from '@/components';
import '@/sass/global.scss';

const libre = Libre_Baskerville({ subsets: ['latin'], weight: ['400', '700'] })

const description = 'Formando bailarinas desde 1956 en Lima, Surco. Nuestros 64 años de experiencia fomentando la danza y la música se ven reflejados en el amor que le ponemos a cada una de nuestras clases de ballet clásico, danza contemporánea y clases individuales de canto, violín y piano.';
const mainImage = '/fondo-inicio-2017.jpg';
const url = process.env.DEPLOY_URL || 'https://www.britanicadeballet.com/';

export const metadata = {
  //metadataBase: new URL(url),
  title: 'Academia Británica de Ballet',
  description,
  openGraph: {
    title: 'Academia Británica de Ballet',
    type: 'website',
    description,
    url,
    siteName: 'Academia Británica de Ballet',
    //images: mainImage
  },
  twitter: {
    title: 'Academia Británica de Ballet',
    description,
    creator: '@academiadballet',
    //images: [mainImage],
  },
  icons: {
    icon: ['/ico.png']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={libre.className}>{children}</body>
      <GoogleAnalytics />
    </html>
  )
}
