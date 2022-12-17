import { iPost } from "shared/interface/post/post.interface";
import type { NextApiRequest, NextApiResponse } from "next";
import {createPost, getPosts} from "shared/api/axios";
import { Override } from "openid-client";
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "../auth/[...nextauth]";

type postResponse = object | iPost[][];

export type GetPostsRequest = Override<
	NextApiRequest,
	{ query: GetPostsRequestQuery }
>;

export type GetPostsRequestQuery = {
	page: number;
};

export default async function handler(
	req: GetPostsRequest,
	res: NextApiResponse<postResponse>,
) {
	const session = await unstable_getServerSession(req, res, authOptions);
	let accessToken = typeof session?.accessToken === "string" ? session.accessToken : "";

	if(req.method === "POST") {
		const { title, contents } = JSON.parse(req.body);
		console.log(title)
		try {
			const posts = await createPost(title, contents, accessToken);
			res.status(200).send(posts);
		} catch (e) {
			const u = e as Error;
			res.status(500).json({ message: u.message });
		}
	} else {
		try {
			const posts = await getPosts(req.query.page, 10, accessToken);
			res.status(200).send(posts);
		} catch (e) {
			const u = e as Error;
			res.status(500).json({ message: u.message });
		}
	}

}
