import Footer from '../components/Footer'
import '../styles/globals.css'
import Navigation from '../components/Navigation'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
