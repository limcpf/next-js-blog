import { iPost } from "shared/interface/post/post.interface";
import type { NextApiRequest, NextApiResponse } from "next";
import { getPost } from "shared/api/axios";
import { Override } from "openid-client";

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
	try {
		const post = await getPost(req.query.id);
		res.status(200).send(post);
	} catch (e) {
		const u = e as Error;
		res.status(500).json({ message: u.message });
	}
}
