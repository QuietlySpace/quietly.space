
import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { JSX } from "react/jsx-runtime";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            };
        } finally {
            sheet.seal();
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
                <Head>
                    {this.props.styles}
                    <meta
                        name="keywords"
                        content=""
                    />
                    <meta property="og:locale" content="en-US" />
                    <meta property="og:type" content="website" />
                    <link rel="shortcut icon" href="/favicon.ico" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

                    <meta
                        name="description"
                        content="Dive Into Spaces"
                    />
                    <meta
                        property="og:description"
                        content="Dive Into Spaces"
                    />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta property="og:title" content="Quietly" />
                    <meta property="og:url" content="https://quietly.space" />
                    <meta name="next-head-count" content="21" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
