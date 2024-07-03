import Head from "next/head";
import styled from "styled-components";
import Menu, { } from "../components/menu";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    padding: 2rem 0 0 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
`;

const Container = styled.section<{ $direction?: string }>`
    max-width: calc(1280px - 2rem);
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: ${(props) => (props.$direction ?? 'row')};
`;

const SideCard = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Square = styled.div<{ $color?: string }>`
    aspect-ratio: 1 / 1;
    background-color: ${(props) => (props.$color ?? '#F5F5F5')};
    border-radius: 2vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 300ms;
    cursor: pointer;
    &:hover,
    &:focus {
        -ms-transform: scale(1.04); 
        -webkit-transform: scale(1.04); 
        transform: scale(1.04); 
    }
`

const Rectangle = styled.div<{ $color?: string, $gap?: string, $animated?: boolean, }>`
    width: ${(props) => (props.$gap ? 'calc(100% - 10px)' : '100%')};
    aspect-ratio: 6 / 3;
    background-color: ${(props) => (props.$color ?? 'transparent')};
    border-radius: 2vh;
    display: grid; 
    grid-template-columns: 50% 50%; 
    grid-template-rows: 100%; 
    gap: 0px ${(props) => (props.$gap ?? '0px')};
    ${(props) => props.$animated && `
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 300ms;
        cursor: pointer;
        &:hover,
        &:focus {
            -ms-transform: scale(1.04); 
            -webkit-transform: scale(1.04); 
            transform: scale(1.04); 
        }
    `}
`

const GradientText = styled.h1<{ $center?: boolean }>`
    color: #FF6B72;
    background-image: -webkit-linear-gradient(0deg, #FF6B72 25%, #8B43E3 85%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    text-align: ${(props) => (props.$center ? 'center' : 'left')};;
    font-size: 2.986rem;
    margin: 0.5rem 0;
    font-weight: 800;
`;

const Title = styled.h4<{ $color?: string }>`
    color: ${(props) => (props.$color ?? '#191919')};;
    font-size: clamp(1rem, 2vw + 1rem, 1.75rem);
    margin: 0;
    font-weight: 500;
`;

const Offset = styled.div`
    position: absolute;
    padding: 1rem;
    top: 0;
    right: 0;
`

const Description = styled.p`
    width: 80%;
    color: #191919;
    text-align: center;
    margin: 0.5rem auto;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;

    @media (min-width: 768px) {
        width: 50%;
    }
`;

const Text = styled.p`
    color: #222222;
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
`;

const CopyrightSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`;

const ContactText = styled.span<{ $color?: string }>`
    color: ${(props) => (props.$color ?? '#F5F5F5')};
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
`;

const Copyright = styled.span`
    color: #F5F5F5;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
`;

const CardImage = styled.div`
    background-color: #FFFFFF;
    margin-left: 2rem;
    width: 50%;
    border-radius: 2vh;
    transition: transform 300ms;
    position: relative;
    background-image: url('/static/background.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
    cursor: pointer;
    &:hover,
    &:focus {
        -ms-transform: scale(1.04); 
        -webkit-transform: scale(1.04); 
        transform: scale(1.04); 
    }
`

const Slogan = styled.h1`
    font-size: 12vh;
    margin: 0;
    cursor: pointer;
    transition: transform 2s;
    &:hover,
    &:focus {
        -ms-transform: scale(0.94); 
        -webkit-transform: scale(0.94); 
        transform: scale(0.94); 
    }
`

const Footer = styled.footer`
    width: 100%;
    height: 70vh;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    position: relative;
`;

const Leading = styled.footer`
    width: 80%;
    aspect-ratio: 21 / 9;
    margin-top: auto;
    border-radius: 2vh 2vh 0 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Fragment = styled.div`
    padding: 3rem 0;
    * {
        padding-bottom: 1rem;
    }
`

const SideText = styled.div`
    background-color: #ffffff;
    height: 100%;
    position: absolute;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    right: 0;
    bottom: 0;
    gap: 0.5rem;
    * {
        align-content: end;
    }
`

const CreatorsTitle = styled.h4`
    margin: 0;
    color: #191919;
    font-size: 2.8vh;
    font-weight: 500;
`

const Attribution = styled.div`
    display: flex;
    justify-content: right;
    padding: 1.2rem 0;
    width: 100%;
`

const FooterContent = styled.div`
    max-width: calc(1280px - 2rem);
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    > * {
        width: 50%;
        height: 100%;
        border-bottom: 1px solid #141414;
        /* border-top: 1px solid #141414; */
        &:first-child {
            border-left: 1px solid #141414;
            border-right: 1px solid #141414;
        }
        &:last-child {
            border-right: 1px solid #141414;
        }
    }
`


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

            <Menu />

            <Wrapper id="home">
                <Image draggable={false} width={64} height={64} src="/static/logo.png" alt="Quietly Logo" />
            </Wrapper>

            <Wrapper id="about">
                <GradientText $center>Quietly.</GradientText>
                <Description>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Description>
                <Leading />
            </Wrapper>

            <Wrapper id="guidelines">
                <Container $direction="column">
                    <GradientText $center>Community Guidelines.</GradientText>
                    <Description>
                        On this page, you'll find our Guidelines that help us keep our community safe and enjoyable for everyone.
                    </Description>
                </Container>
                <br />
                <Container>
                    <SideCard>
                        <Rectangle $color='black' $animated>
                            <Title $color="#FFFFFF">Privacy & Terms</Title>
                        </Rectangle>
                        <br />
                        <Rectangle $gap='10px'>
                            <Link href='https://terms.quietly.space'>
                                <Square $color="#ff87ab">
                                    <Offset>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </Offset>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" viewBox="0 0 24 24" strokeWidth="1.3" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                    </svg>
                                </Square>
                            </Link>
                            <Link href='https://terms.quietly.space'>
                                <Square $color="#FFFFFF">
                                    <Offset>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </Offset>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </Square>
                            </Link>
                        </Rectangle>
                    </SideCard>
                    <CardImage>
                        <SideText>
                            <CreatorsTitle>Creators</CreatorsTitle>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </SideText>
                    </CardImage>
                </Container>

                <Container>
                    <Attribution>
                        Photo by&nbsp;<a href="https://unsplash.com/@fransaraco?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Francesca Saraco</a>&nbsp;on&nbsp;<a href="https://unsplash.com/photos/person-wearing-white-adidas-stand-smith-sneankers-J6iLgznwL1c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </Attribution>
                </Container>

                <Container $direction="column">
                    <Fragment>
                        <Title>Community Guidelines</Title>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text>Last update: 28 June 2024</Text>
                    </Fragment>
                </Container>
            </Wrapper>

            <Footer id="contact">
                <FooterContent>
                    <div></div>
                    <div></div>
                </FooterContent>

                <Container>
                    <CopyrightSection>
                        <Copyright>© {new Date().getFullYear()} Quietly Space</Copyright>
                        <Contact>
                            <ContactText $color="gray">contact us</ContactText>
                            <ContactText style={{ cursor: 'pointer' }} onClick={() => window.open('mailto:hello@quietly.space')}>hello@quietly.space</ContactText>
                        </Contact>
                    </CopyrightSection>
                </Container>
            </Footer>
        </>
    );
}



export default Home;