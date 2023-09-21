import prisma from "@/lib/prisma"
import NextAuth, { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Adapter } from "next-auth/adapters"
import GoogleProvider from "next-auth/providers/google"

const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    pages: {
      signIn: "/login",
    },
    // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // callbacks:{
  //   async session({ session, user }) {
  //   //   Add necessary values into the session so the user can access them when needed
  //   //   session!.user!.id = user.id;
  //   //   session!.user!.stripeCustomerId = user.stripeCustomerId;
  //   //   session!.user!.isActive = user.isActive;
  //     return session;
  //   },
  // },
  // events:{
  //   async createUser(message){
  //       // create stripe customer and add it's id to the user in the db
  //   }
  // }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };