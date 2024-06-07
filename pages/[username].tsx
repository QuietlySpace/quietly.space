import axios, { AxiosResponse, HttpStatusCode } from "axios";
import type { GetServerSideProps } from "next";
import Head from "next/head";

type UserPageProps = {
    username: string;
    name: string;
    handle: string;
    protected: boolean;
    verified: boolean;
    badges: string[];
    bio: string;
    link: string;
    location: string;
    banner_url?: string;
    avatar_url?: string;
};

export const getServerSideProps: GetServerSideProps<UserPageProps> = async ({
    params,
}) => {
    if (params && params.username) {
        const username = Array.isArray(params.username)
            ? params.username[0]
            : params.username;
        if (username.at(0) === "@") {

            const request = await axios.get(`https://api.quietly.space/auth/profile?username=${username.substring(1)}`, {
                validateStatus: function (status) {
                    return status == HttpStatusCode.Found;
                }
            });

            if (request.status == HttpStatusCode.Found) {
                const user: UserPageProps = request.data;
                return { props: { ...user } };
            }

            return { notFound: true };
        }
    }
    return { notFound: true };
};

export default function UserPage({ ...profile }: UserPageProps) {
    return (
        <main className="container max-w-[640px] mx-auto center bg-black py-6 flex flex-col justify-center items-center">
            <Head>
                <title>{`${profile.name} (@${profile.handle}) - Quietly Space`}</title>
            </Head>

            <div className="container-header">
                <img className="absolute top-0 left-0 h-full w-full bg-[#8B43E3] rounded-lg select-none" />
            </div>

            <img className="z-0 w-32 h-32 rounded-full bg-[#8B43E3] border-solid border-4 border-black -mt-20 select-none" src={profile.avatar_url} alt="" />

            <div className="flex flex-col justify-center items-center px-6">
                <h1 className="font-bold text-2xl">{profile.name}</h1>
                <span>@{profile.handle}</span>
                <h2 className="text-center">{profile.bio}</h2>
                {/* <div className="flex flex-row">
                    <span>{profile.location}</span>
                    <span>{profile.link}</span>
                </div> */}
            </div>

        </main>
    )
}