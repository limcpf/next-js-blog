import NextAuth, { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import { getAuth } from "../../../shared/api/axios";

export const authOptions: NextAuthOptions = {
	providers: [
		Github({
			clientId: "c40f88ae166bc53f8019",
			clientSecret: "b06c160ae35511a1a10a62fcf2738989fce090d1",
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
};

export default NextAuth(authOptions);
