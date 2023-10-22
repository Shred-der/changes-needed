import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { Layout } from '../src/components/layout/Layout'
import { store } from '../src/store/store'
import '../src/styles/index.scss'
import { AuthProvider } from '../src/contexts/Auth'
import { ThemeProvider } from '../src/contexts/Theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="Admin Dashboard web application" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  )
}

export default appWithTranslation(App)
