import LoginImage from '@/app/assets/background-image-login.svg';
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import LoginButton from "./components/login-button";
import { authOptions } from "./lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/dashboard')
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow text-center md:pt-28 pt-12 px-4 max-w-5xl font-light relative container mx-auto">
          <Image src={LoginImage} alt="background image" className="absolute -left-20 -z-10 bottom-0 md:visible invisible"></Image>
          <header>
            <h1 className="md:text-7xl sm:text-6xl text-4xl bg-neutral-50">
              Unlock the Power of <span>GitHub Analytics</span>
            </h1>
            <p className="font-extralight text-neutral-600 md:text-xl mt-6 md:mt-10">
              Enhance software development with automated GitHub analyses, revealing invaluable metrics and KPIs to improve software delivery and quality.
            </p>
          </header>
          <LoginButton />
        </main>
        <footer className="text-center font-extralight text-neutral-500 md:text-md mt-6 md:mt-10 mb-5">
          Created by <a href='https://www.linkedin.com/in/tais-bronca/' className='font-bold hover:text-gray-900 transition duration-300 ease-in-out'>Tais Bronca</a>
        </footer>
      </div>
    </>
  );
}
