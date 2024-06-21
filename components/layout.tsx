import { useQRCode } from 'next-qrcode';
import Link from 'next/link';
import { ReactElement } from 'react';

export function Layout(
    { children }: { children: ReactElement }
) {
    const { Canvas } = useQRCode();

    return (
        <div className="grid grid-cols-12 grid-rows-6 h-screen gap-4 bg-white">

            <header className="xl:col-span-5 lg:col-span-6 sm:col-span-12 hidden lg:block row-span-5 pl-4 pt-4">
                <div className="bg-slate-200 rounded-[24px] flex h-full bg-no-repeat bg-cover bg-center bg-[url('/static/background.jpg')]">
                    <div id='teste' className="bg-slate-200">
                        <img draggable={false} width={48} src="/static/logo.png" alt="" />
                    </div>

                    <div className='w-full flex justify-end'>
                        <div className='self-end p-4 mr-2'>
                            Photo by <a href="https://unsplash.com/@joeyy_anne?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joeyy Lee</a> on <a href="https://unsplash.com/photos/woman-in-white-long-sleeve-shirt-sitting-on-white-textile-on-green-grass-during-daytime-xRie5oVXYEQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                        </div>
                    </div>
                </div>
            </header>

            <header className="xl:col-span-3 row-span-5 hidden xl:block col-start-6 pt-4">
                <div className='flex flex-col items-start justify-end h-full'>

                    <div className='static bg-[#f4f1e6] rounded-[72px] flex p-4 justify-center'>

                        <div className='m-8'>
                            <Canvas
                                text={'https://download.quietly.space'}
                                options={{
                                    errorCorrectionLevel: 'M',
                                    margin: 0,
                                    scale: 4,
                                    width: 124,
                                    color: {
                                        dark: '#0a0a0a',
                                        light: '#f4f1e6',
                                    },
                                }}
                            />
                        </div>

                        {/* <div className='absolute'>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </div> */}

                    </div>

                    <h1 className='text-black pt-4'>Dive Into Spaces.</h1>
                    <p className='text-black'> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className="bg-[#0a0a0a] mt-4 hover:bg-black text-white font-bold py-3 px-12 rounded-full">
                        join quietly
                    </button>
                </div>
            </header>

            <header className="xl:col-span-4 lg:col-span-6 row-span-5 sm:col-span-12 col-start-9 p-3">
                {children}
            </header>

            <footer className="col-span-12 row-start-6 bg-[#0a0a0a] flex flex-row justify-between items-center">
                <div className='flex flex-row items-center px-12'>
                    <Link href="https://terms.quietly.space/">
                        <button className="bg-transparent text-gray-200 font-semibold py-2 px-4 border border-gray-200 rounded-full mr-3">
                            Terms
                        </button>
                    </Link>
                    <Link href="https://changelog.quietly.space/">
                        <button className="bg-transparent text-gray-200 font-semibold py-2 px-4 border border-gray-200 rounded-full mr-3">
                            What's&nbsp;New
                        </button>
                    </Link>

                    <nav className="text-xs text-base font-semibold font-nunito">
                        <span className="text-gray-200 px-2 py-3 text-base">hello@quietly.space</span>
                        <a href="https://status.quietly.space/"><span className="text-gray-200 px-2 py-3 text-base">Status</span></a>
                    </nav>
                </div>

                <div className='flex relative whitespace-nowrap overflow-hidden w-full'>
                    <h1 className="rightToLeft font-black text-white text-7xl font-['Six Caps'] flex justify-center items-center">
                        POST&nbsp;&nbsp;
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        &nbsp;&nbsp;DISCOVER&nbsp;&nbsp;
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        &nbsp;&nbsp;REPLY&nbsp;&nbsp;
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        &nbsp;&nbsp;DIVE INTO&nbsp;&nbsp;
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        &nbsp;&nbsp;QUIETLY&nbsp;&nbsp;
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        &nbsp;&nbsp;SPACE
                    </h1>
                </div>
            </footer>

        </div>
    );
}