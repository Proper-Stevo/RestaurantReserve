import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Info from '../components/infoSection';
import Bar from '../components/bar';
import Story from '../components/backStory';
import Contact from '../components/contactForm';
import Homer from '../components/homer';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Homer />
      <Info />
      <Bar />
      <Story />
      <Contact />
    </Layout>

  )
}
