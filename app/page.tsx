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
    <main className="text-center md:pt-40 pt-12 px-4 max-w-5xl font-light relative min-h-screen container mx-auto">
      <Image src={LoginImage} alt="background image" className="absolute top-10 -left-40 -z-10 bottom-0 md:visible invisible"></Image>
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
  );
}
