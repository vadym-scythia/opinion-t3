import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)
    const { query } = req.query;

    if (session) {
        res.send({
            content: "This is protected content. You can access this content because you are signed in.",
            query: query,
        })
    } else {
        res.send({
            error: "You must be signed in to view the protected content on this page.",
            query: query,
        })
    }
}