import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function Website({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
  )
}

export default Website
