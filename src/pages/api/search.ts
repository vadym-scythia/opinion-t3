import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });
    console.log(session);
    const { query } = req.query;
    console.log(query);
    const accessToken = session?.accessToken;
    console.log(accessToken);

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