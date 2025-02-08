'use client'

import { GoogleAnalytics } from '@next/third-parties/google';

const NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

const Analytics = () => {
  return <GoogleAnalytics gaId={NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
}

export default Analytics