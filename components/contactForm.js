import React from "react";
import { Parallax } from 'react-parallax';
import Link from "next/link"

function Contact() {
  return (
    <div>
      <Parallax className='bgImage3' bgImage="/images/overview.jpg" strength={900}>
        <div class="mx-auto max-w-2xl py-96">
          <div class="text-center">
            <div class="mt-auto flex items-center justify-center gap-x-6">
              <Link href="/menu" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next Page</Link>
            </div>
          </div>
        </div>
      </Parallax >
    </div >
  )
}

export default Contact;