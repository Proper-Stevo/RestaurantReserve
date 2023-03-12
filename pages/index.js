import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Parallax } from 'react-parallax';
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
      <Parallax className='bgImage' bgImage="/images/FrontRes.jpg" strength={900}>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="overflow-auto text-center">
            <p className="text-9xl font-bold tracking-tight text-white sm:text-10xl">South Central, With Love.</p>
            <p className="mt-6 text-2xl leading-8 text-white">Los Angeles Cuisine, from the heart of California.</p>
          </div>
        </div>
      </Parallax>
      <Info />
      <Bar /> 
      <Story />
      <Contact />
    </Layout>
   
  )
}
