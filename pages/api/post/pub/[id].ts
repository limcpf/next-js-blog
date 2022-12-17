import { iPost } from "shared/interface/post/post.interface";
import type { NextApiRequest, NextApiResponse } from "next";
import { togglePublished } from "shared/api/axios";
import { Override } from "openid-client";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

type postResponse = object | iPost[];

export type GetPostRequest = Override<
	NextApiRequest,
	{ query: GetPostRequestQuery }
>;

export type GetPostRequestQuery = {
	id: number;
};

export default async function handler(
	req: GetPostRequest,
	res: NextApiResponse<postResponse>,
) {
	const session = await unstable_getServerSession(req, res, authOptions);
	let accessToken =
		typeof session?.accessToken === "string" ? session.accessToken : "";

	try {
		const post = await togglePublished(req.query.id, accessToken);
		res.status(200).send(post);
	} catch (e) {
		const u = e as Error;
		res.status(500).json({ message: u.message });
	}
}
