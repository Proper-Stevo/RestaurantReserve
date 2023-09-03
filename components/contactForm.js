import React from "react";
import { Parallax } from 'react-parallax';
import Link from "next/link"

function Contact() {
  return (
    <div className="bgImage3">
      <div className="mx-auto max-w-2xl py-96">
        <div className="text-center">
          <div className="mt-auto flex items-center justify-center gap-x-6">
            <Link href="/menu" className="flex items-center rounded-md bg-white font-semibold py-3 px-4 hover:bg-blue-400 hover:text-white">Menu Page
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact;