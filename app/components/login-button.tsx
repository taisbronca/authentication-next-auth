'use client';
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function LoginButton() {
    function handleClick() {
        signIn('github');
    }
    return (
        <button
            onClick={handleClick}
            className="mt-24 bg-black text-white px-6 py-3 flex items-center gap-3 rounded-lg mx-auto"
        >
            <FaGithub />
            Sign in with GitHub
        </button>
    )
}