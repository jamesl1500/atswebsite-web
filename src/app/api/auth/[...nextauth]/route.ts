import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import api from "@/lib/api"

// Define the NextAuth configuration
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Login",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                try {
                    const res = await api.post("/auth/login", credentials);

                    if(res.status === 200 && res.data) {
                        const user = res.data;

                        // Return user object if login is successful
                        return user;
                    }
                    // If login fails, return null
                    return null;
                } catch (error) {
                    console.error("Login error:", error);
                    // Handle error appropriately, e.g., log it or rethrow
                    throw new Error("Login failed");
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // Persist the user object in the token
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            // Attach user info to the session
            session.user = token.user;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});

// Export the NextAuth handler
export { handler as GET, handler as POST };
