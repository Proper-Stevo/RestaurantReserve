import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Staff from "../data/staff.json";
import Link from "next/link";

function About({ staff }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="container pt-32 px-6 mx-auto ">
        <div className="text-gray-800 text-center">
          <h2 className="text-6xl font-bold mb-12 text-white">Meet the team</h2>
          <p className="text-xl text-white">
            The exceptional staff at this establishment is a true testament to
            the notion of world-class service. With their unwavering dedication
            and impeccable attention to detail, they effortlessly create an
            unforgettable dining experience for every guest. From their warm and
            welcoming demeanor to their extensive knowledge of the menu, they go
            above and beyond to cater to individual preferences and ensure that
            every need is met. Their passion for hospitality shines through in
            their seamless coordination, efficiency, and genuine care, making
            them undeniably the best staff in the world.
          </p>
          <div>
            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12 py-10">
              {staff.map((s, index) => (
                <div className="mb-12" key={index}>
                  <img
                    src={s.image}
                    className="rounded-full mx-auto shadow-lg mb-4"
                    alt=""
                  />
                  <p className="font-bold mb-2">{s.name}</p>
                  <p className="text-white">{s.title}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
      <div className="bg-[url(/images/overview.jpeg)] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-2xl py-96 ">
          <div className="text-center">
            <div className="mt-auto flex items-center justify-center gap-x-6">
              <Link href="/reservations" className="flex items-center rounded-md bg-white font-semibold py-3 px-4 hover:bg-blue-400 hover:text-white">Reserve a table
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
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      staff: Staff,
    },
  };
}

export default About;
