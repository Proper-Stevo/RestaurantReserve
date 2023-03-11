import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Parallax } from 'react-parallax';
import Info from '../components/infoSection';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Parallax className='bgImage' bgImage="/images/FrontRes.jpg" strength={900}>
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div class="text-center">
            <h1 class="stick top-50 text-4xl font-bold tracking-tight text-white sm:text-6xl">South Central, With Love.</h1>
            <p class="mt-6 text-lg leading-8 text-white">Los Angeles Cuisine, from the heart of California.</p>
          </div>
        </div>
      </Parallax>
      <Info />
    </Layout>
  )
}
