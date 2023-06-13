import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Info from '../components/infoSection';
import Bar from '../components/bar';
import Story from '../components/backStory';
import Contact from '../components/contactForm';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div id='home'>
        <div className="relative mx-auto max-w-2xl pt-32 pb-48 sm:py-48 lg:py-56">
          <div className="relative sm:mb-8 sm:flex sm:justify-center">
            <div className="fixed text-center text-6xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-9xl">South Central,<br /> With Love.
              <p className="mt-6 text-2xl leading-8 text-white tracking-normal  ">Los Angeles Cuisine, from the heart of California.</p>
            </div>
          </div>
        </div>
        </div>
      <Info />
      <Bar />
      <Story />
      <Contact />
    </Layout>

  )
}
