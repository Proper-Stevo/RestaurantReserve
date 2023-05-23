import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Staff from "../data/staff.json";

function About({ staff }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="container py-32 px-6 mx-auto">
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
