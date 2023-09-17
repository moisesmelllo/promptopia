import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { clientId, clientSecret } from "@keys";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    })
  ],
  async session({ session }) {

  },

  async signIn({ profile }) {

  }

})

export { handler as GET, handler as POST};