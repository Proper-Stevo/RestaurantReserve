import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Menu', href: '/menu', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Reservations', href: '#', current: false },
  { name: 'Socials', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
      <>
      <Disclosure as="nav" className="bg-transparant absolute top-0 z-50 w-full">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                
                    {home ? (
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex flex-shrink-0 items-center">
                        <a href='/'>
                          <img
                            className="block h-8 w-auto"
                            src="/images/nvbg.png"
                            alt="Your Company"
                          /></a>
                      </div>
                      <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              'text-white hover:bg-gray-800 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div> 
                        </div>
                        </div>
                         ) : (
                          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                          <div className="flex flex-shrink-0 items-center">
                            <a href='/'>
                              <img
                                className="block h-8 w-auto"
                                src="/images/re2rant.png"
                                alt="Your Company"
                              /></a>
                          </div>
                          <div className="hidden sm:ml-6 sm:block">
                         <div className="flex space-x-4">
                         {navigation.map((item) => (
                           <a
                             key={item.name}
                             href={item.href}
                             className={classNames(
                               'text-black hover:bg-gray-500 hover:text-white',
                               'rounded-md px-3 py-2 text-sm font-medium'
                             )}
                             aria-current={item.current ? 'page' : undefined}
                           >
                             {item.name}
                           </a>
                         ))}
                       </div>
                      
                  </div>
                </div>  )}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-9 w-9 rounded-full"
                          src="/images/selfie.jpeg"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="www.github.com/proper-stevo"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              My Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="www.github.com/proper-stevo"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              GitHub
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="www.google.com"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Resume
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
      </header>
      <main className='bg-blue-300'>{children}</main>
      <footer className="bg-[#e6d7d6] text-center pt-2 pb-6">
        <div>
          <a className="text-black inline-flex" href="">
            <p className="pl-2">Proper-Stevo &copy; 2023</p>
          </a>
        </div>

        <a
          className="text-black inline-flex hover:no-underline"
          href="https://github.com/proper-stevo"
        >
          <p>designed by : Stevo</p>
        </a>
      </footer>
    </div>
  )
}
