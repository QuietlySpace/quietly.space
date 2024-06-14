import Link from 'next/link';
import { ReactElement } from 'react';

export function Layout({ children }: { children: ReactElement }) {
    return (
        <div className="grid grid-cols-12 grid-rows-6 h-screen">

            <header className="col-span-4 row-span-5 p-3">
                <div className="bg-slate-200 rounded-[24px] flex h-full bg-no-repeat bg-cover bg-center bg-[url('/static/background.jpg')]">
                    <div id='teste' className="bg-slate-200">
                        <img draggable={false} width={48} src="/static/logo.png" alt="" />
                    </div>

                    <div className='w-full flex justify-end'>
                        <div className='self-end p-4 mr-2'>
                            Photo by <a href="https://unsplash.com/@ikarovski?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ikal</a> on <a href="https://unsplash.com/photos/a-person-standing-on-the-side-of-a-road-near-the-ocean-HS-ZGgEWFFM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                        </div>
                    </div>

                </div>
            </header>

            <header className="col-span-4 row-span-5 p-3">
                <div className='h-full flex flex-col'>
                    <div className='rounded-[24px] h-full' />
                    <div className='p-4'>
                        <h1 className="font-bold text-black	text-7xl text-center font-nunito">Quieeeeeeeetly.</h1>
                    </div>
                </div>
            </header>

            <header className="col-span-4 col-start-9 row-span-5 p-3">
                {children}
            </header>

            <footer className="px-12 col-span-12 row-span-3 row-start-6 bg-black flex flex-row justify-between items-center">
                <div className='flex flex-row items-center'>
                    <Link href="https://terms.quietly.space/">
                        <button className="bg-transparent text-gray-200 font-semibold py-2 px-4 border border-gray-200 rounded-full mr-3">
                            Terms
                        </button>
                    </Link>
                    <Link href="https://changelog.quietly.space/">
                        <button className="bg-transparent text-gray-200 font-semibold py-2 px-4 border border-gray-200 rounded-full mr-3">
                            Changelog
                        </button>
                    </Link>

                    <nav className="text-xs text-base font-semibold font-nunito">
                        <span className="text-gray-200 px-2 py-3 text-base">hello@quietly.space</span>
                        <a href="https://status.quietly.space/"><span className="text-gray-200 px-2 py-3 text-base">Status</span></a>
                    </nav>
                    <svg width="32" height="32" viewBox="0 0 32 32">
                        <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                    </svg>
                </div>
                <div className="flex justify-end">
                    <div className="bg-white p-6 rounded-[48px]">
                        <div className="flex items-center flex-col justify-between">
                            <img draggable={false} width={72} src="/static/qrcode.png" alt="" />
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}