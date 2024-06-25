import DashImage from '@/app/assets/background-image-dash.svg';
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FaArrowAltCircleRight } from "react-icons/fa";
import LogoutButton from "../components/logout-button";
import { authOptions } from "../lib/auth";
import Link from 'next/link';

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return redirect('/')
    }
    const user = session.user;

    const repoCount =
        session.user.githubProfile.public_repos +
        (session.user.githubProfile.total_private_repos ?? 0);
    const reposUrl = session.user.githubProfile.repos_url;

    const gistCount =
        session.user.githubProfile.public_gists +
        (session.user.githubProfile.private_gists ?? 0);
    const gistsUrl = `https://api.github.com/users/${session.user.githubProfile.login}/gists`;

    const followerCount = session.user.githubProfile.followers
    const followersUrl = session.user.githubProfile.followers_url;

    return (
        <main className="md:px-28 px-8 py-10 relative min-h-screen container mx-auto">
            <Image src={DashImage} alt="background image dashboard" className="absolute invisible xl:visible right-20  bottom-20" />
            <header className="text-center py-12 md:pb-24">
                <Image src={user?.image ?? ''} alt="avatar image" width={100} height={100} className="rounded-full mx-auto" />
                <h1 className="md:text-6xl text-4xl mt-6">Welcome, <span className="font-bold">{user?.name}</span></h1>
                <h3 className="md:text-3xl text-lg font-extralight mt-6 text-neutral-600">How about we take a look at your GitHub?</h3>
            </header>
            <section className="max-w-xl mb-12">
                <hr />
                <ItemButton URL={reposUrl}>My Repositories ({repoCount})</ItemButton>
                <ItemButton URL={gistsUrl}>My Gists ({gistCount})</ItemButton>
                <ItemButton URL={followersUrl}>My Followers ({followerCount})</ItemButton>
            </section>
            <LogoutButton />
        </main>
    );
}

function ItemButton({ children, URL }: { children: React.ReactNode, URL: string }) {
    return (
        <>
            <Link href={URL} className="flex items-center justify-between text-lg md:text-xl py-8 w-full">
                {children}
                <FaArrowAltCircleRight className="-rotate-45 text-violet-500" />
            </Link>
            <hr />
        </>
    )
}