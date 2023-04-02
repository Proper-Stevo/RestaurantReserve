import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

function reservations() {
    return (
        <Layout>
            <Head>
                {siteTitle}
            </Head>
        </Layout>
    )
}

export default reservations;