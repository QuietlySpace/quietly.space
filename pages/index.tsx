import Head from "next/head";

export default function Home() {
    return (
        <main className="flex h-screen flex-col items-center teste">
            <Head>
                <title>Quietly Space</title>
                <meta property="og:title" content='Quietly Space' />
                <meta property="og:description" content=''></meta>
                <meta property="og:url" content='https://www.quietly.space/' />
            </Head>

            <div className="grid grid-cols-12 gap-4 items-center h-full content-between">

                <div className="col-span-12 ol-span-12 xl:col-span-12 py-8 w-full flex flex-row items-center justify-between">
                    <nav className="text-xs text-base	font-semibold	font-nunito">
                        <a className="px-2 py-3 group text-pink-500 transition-all duration-300 ease-in-out" href="https://terms.quietly.space/">
                            <span className="text-base text-gray-600 font-semibold	font-nunito bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                Terms
                            </span>
                        </a>
                        <a className="px-2 py-3 group text-pink-500 transition-all duration-300 ease-in-out" href="https://changelog.quietly.space/">
                            <span className="text-base text-gray-600 font-semibold	font-nunito bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                Changelog
                            </span>
                        </a>
                    </nav>
                </div>

                <div className="col-span-12 md:col-span-12 xl:col-span-6">
                    <h1 className="font-bold text-black	text-7xl text-center font-nunito">Quieeeeeeeetly.</h1>
                </div>

                <div className="col-span-12 md:col-span-6 xl:col-span-6 flex justify-end">
                    <div className="bg-white p-14 rounded-[124px]">
                        <div className="flex items-center flex-col justify-between">
                            <img draggable={false} width={200} src="/static/qrcode.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="col-span-12 ol-span-12 xl:col-span-12 py-8 w-full border-t-[0.5px] border-[#fd8b8f] flex flex-row items-center justify-between">
                    <nav className="text-xs text-base font-semibold font-nunito">
                        <span className="text-gray-600 px-2 py-3 text-base">hello@quietly.space</span>
                        <a href="https://status.quietly.space/"><span className="text-gray-600 px-2 py-3 text-base">Status</span></a>
                        <span className="text-gray-600 px-2 py-3 text-base">Built with ❤️ by <span className="text-black">Quietly Space</span></span>
                    </nav>

                    <svg width="32" height="32" viewBox="0 0 32 32">
                        <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                    </svg>
                </div>

            </div>
        </main>
    );
}
