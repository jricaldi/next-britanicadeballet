import { Libre_Baskerville } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics';
import "@/app/global.css";

const libre = Libre_Baskerville({ subsets: ['latin'], weight: ['400', '700'] })

const description = 'Formando bailarinas desde 1956 en Lima, Surco. Nuestros 64 años de experiencia fomentando la danza y la música se ven reflejados en el amor que le ponemos a cada una de nuestras clases de ballet clásico, danza contemporánea y clases individuales de canto, violín y piano.';
const url = process.env.DEPLOY_URL || 'https://www.britanicadeballet.com/';

export const metadata = {
  metadataBase: new URL(url),
  title: 'Academia Británica de Ballet',
  description,
  openGraph: {
    title: 'Academia Británica de Ballet',
    type: 'website',
    description,
    url,
    siteName: 'Academia Británica de Ballet',
  },
  twitter: {
    title: 'Academia Británica de Ballet',
    description,
    creator: '@academiadballet',
  },
  category: 'music and dance',
  themeColor: "#b15063"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={libre.className}>
        {children}
      </body>
      <GoogleAnalytics />
    </html>
  )
}
