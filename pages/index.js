import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Merriweather:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Navigation/>
        <Hero/>
        <Main/>
      </main>
    </div>
  )
}
