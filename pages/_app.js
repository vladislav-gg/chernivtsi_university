import Footer from '../components/Footer'
import '../styles/globals.css'
import Navigation from '../components/Navigation'
import Layout from '../components/Layout'
import { AnimatePresence } from "framer-motion"
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>        
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <AnimatePresence>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
    </>
  )
}

export default MyApp
