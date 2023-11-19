import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions =  {
    providers:[
        CredentialProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text"},
                password: {label:"Password",type: "password"}
            },
            async authorize(credentials){
                return null;
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, handler as Put, handler as DELETE }