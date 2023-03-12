import Head from 'next/head'
import Link from 'next/link'
import Nav from "./nav"

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="">
        <Nav />
      </header>
      <main>{children}</main>
      <footer className="bg-black text-center pt-2 pb-6">
        <div>
          <a className="text-white inline-flex" href="">
            <p className="pl-2">Proper-Stevo &copy; 2023</p>
          </a>
        </div>

        <a
          className="text-white inline-flex hover:no-underline"
          href="https://github.com/proper-stevo"
        >
          <p>designed by : </p>
        </a>
      </footer>
    </div>
  )
}
