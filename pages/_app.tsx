import type { AppProps } from 'next/app'

import { AuthProvider, SaasProvider } from '@saas-ui/react'
import Layout from '../components/layout'
import '../styles/css/variables.css'
import '../styles/css/global.css'
import '../styles/css/scrollbar.css';

import theme from '../theme'
import {Footer} from '../components/layout/footer'

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, footer } = pageProps

  return (
    <SaasProvider theme={theme}>
      <AuthProvider>
      <Layout
            announcement={pageProps.announcement}
            header={pageProps.header}
            footer={pageProps.footer !== false ? <Footer /> : null}
          >
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </SaasProvider>
  )
}

export default MyApp
