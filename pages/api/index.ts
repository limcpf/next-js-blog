import type { NextApiRequest, NextApiResponse } from "next";
import { getPong } from "shared/api/axios";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<string>,
) {
	const ping: string = await getPong();
	res.status(200).send(ping);
}
