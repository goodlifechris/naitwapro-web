'use client'

export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

declare global {
  interface Window {
    gtag: (option: string, gaTrackingId: string, options: Record<string, unknown>) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: Record<string, any>[]
  }
}