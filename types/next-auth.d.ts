import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */

	interface User extends DefaultUser {
		accessToken?: string;
	}

	interface Session {
		accessToken: string | unknown;
		user: {
			/** The user's postal address. */
			address: string;
		} & DefaultSession["user"];
	}
}
