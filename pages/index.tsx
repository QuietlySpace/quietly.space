import Head from "next/head";
import styled from "styled-components";

const Leading = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
    return (
        <>
            <Head>
                <title>Quietly</title>
                <meta name="description" content="Dive into Spaces" key="desc" />
                <meta property="og:title" content="Quietly" />
                <meta
                    property="og:description"
                    content="Dive into Spaces"
                />
                <meta
                    property="og:image"
                    content="/static/logo.png"
                />
            </Head>

            <Leading>
                <img draggable={false} width={64} src="/static/logo.png" alt="Quietly Logo" />
            </Leading>

        </>
    );
}



export default Home;