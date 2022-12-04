import { iPost } from "shared/interface/post/post.interface";
import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "shared/api/axios";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<string>,
) {
	const posts: iPost[] = await getPosts(0, 0);
	res.status(200).json(posts.toString());
}
