import { iPost } from "shared/interface/post/post.interface";
import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "shared/api/axios";
import {Override} from "openid-client";

type postResponse = object | Array<iPost[]>;

export type GetPostsRequest = Override<NextApiRequest, { query: GetPostsRequestQuery }>

export type GetPostsRequestQuery = {
	page: number
}

export default async function handler(
	req: GetPostsRequest,
	res: NextApiResponse<postResponse>,
) {
	try {
		const posts = await getPosts(req.query.page, 10);
		res.status(200).send(posts);
	} catch (e) {
		const u = e as Error;
		res.status(500).json({ message: u.message });
	}
}