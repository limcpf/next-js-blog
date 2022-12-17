import NextAuth, { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import { getAuth } from "../../../shared/api/axios";

export const authOptions: NextAuthOptions = {
	providers: [
		Github({
			clientId: process.env.CLIENT_ID ?? "",
			clientSecret: process.env.CLIENT_SECRET ?? "",
		}),
	],
	callbacks: {
		async signIn({ user }) {
			try {
				const { id, name, email } = user;
				const { accessToken, isSuccessLogin } = await getAuth({
					id,
					name,
					email,
				});

				user.accessToken = accessToken;

				return isSuccessLogin;
			} catch (e) {
				console.log(e);
				return false;
			}
		},
		async session({ session, token }) {
			if (token.accessToken) {
				session.accessToken = token.accessToken;
			}
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.accessToken = user.accessToken;
			}
			return token;
		},
	},
	session: {
		strategy: "jwt",
		maxAge: 60 * 60,
	},
};

export default NextAuth(authOptions);
