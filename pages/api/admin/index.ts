import {NextApiRequest, NextApiResponse} from "next";
import {unstable_getServerSession} from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    const session = await unstable_getServerSession(req, res, authOptions);
    if(session)  {
        res.send(JSON.stringify(session));
    } else {
        res.send("bad");
    }
}
