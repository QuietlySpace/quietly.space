import { Layout } from "../components/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Quietly Space</title>
                <meta property="og:title" content='Quietly Space' />
                <meta property="og:description" content=''></meta>
                <meta property="og:url" content='https://www.quietly.space/' />
            </Head>
            {/* <div className="col-span-12 md:col-span-12 xl:col-span-6">
                <h1 className="font-bold text-black	text-7xl text-center font-nunito">Quieeeeeeeetly.</h1>
            </div> */}

            <input/>
            <input/>
            <button></button>
            <button></button>
            <button></button>


        </>
    );
}

Home.getLayout = function (page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Home;