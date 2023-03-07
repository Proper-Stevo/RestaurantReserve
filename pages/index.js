import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Parallax } from 'react-parallax';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Parallax className='bgImage' bgImage="/images/FrontRes.jpg" strength={900}>
            <div className='contentHome text-center' id="home">
                <span>
                    <h1 className="ResTitle">Resturant Name Goes Here</h1>
                    <p>Los Angeles Best New Resturant</p>
                </span>
            </div>
        </Parallax>
    </Layout>
  )
}
