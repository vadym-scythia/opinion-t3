import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });
    console.log(session);
    const { query } = req.query;
    console.log(query);
    const accessToken = session?.accessToken;
    console.log(accessToken);

    if (session) {
        try {
            const url = `https://graph.instagram.com/me?fields=id,username,account_type&access_token=${accessToken}`;
            const response = await axios.get(url);

            res.send({
                message: "Success.",
                query: query,
                instagramData: response.data,
            });
        } catch (error) {
            console.error(error);
            res.send({
                message: "An error occurred while fetching the Instagram API.",
                query: query,
            });
        }
    } else {
        res.send({
            message: "You must be signed in to view the protected content on this page.",
            query: query,
        })
    }
}