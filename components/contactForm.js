import React from "react";
import { Parallax } from 'react-parallax';
import Link from "next/link"

function Contact() {
  return (
    <div>
      <Parallax className='bgImage3' bgImage="/images/overview.jpg" strength={500}>
        <div className="mx-auto max-w-2xl py-96">
          <div className="text-center">
            <div className="mt-auto flex items-center justify-center gap-x-6">
              <Link href="/menu" className="rounded-md bg-gray-200 px-3.5 py-2.5 text-sm font-bold text-yellow shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Menu Page</Link>
            </div>
          </div>
        </div>
      </Parallax >
    </div >
  )
}

export default Contact;