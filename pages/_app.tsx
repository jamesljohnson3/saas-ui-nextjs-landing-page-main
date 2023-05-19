import type { AppProps } from 'next/app'

import { AuthProvider, SaasProvider } from '@saas-ui/react'
import { Layout } from 'components/layout'
import { SaasProvider } from '@saas-ui/react'
import '../styles/css/variables.css'
import '../styles/css/global.css'
import '../styles/css/scrollbar.css';

import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, footer } = pageProps

  return (
    <SaasProvider theme={theme}>
      <AuthProvider>
        <Layout
          announcementProps={announcement}
          footerProps={footer}
        >
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </SaasProvider>
  )
}

export default MyApp
