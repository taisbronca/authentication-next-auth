import { GithubProfile } from "next-auth/providers/github";
import NextAuth from "next-auth/next";

declare module 'next-auth' {
    interface Session {
        user: {
            name: string;
            email: string;
            image: string;
            githubProfile: GithubProfile;
        };
    }
}