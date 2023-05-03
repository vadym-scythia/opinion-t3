import NextAuth from "next-auth";
import InstagramProvider from "next-auth/providers/instagram";

export const authOptions = {
    providers: [
        InstagramProvider({
            clientId: process.env.INSTAGRAM_CLIENT_ID,
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
        }),
    ]
}

export default NextAuth(authOptions);