import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import url from "url";

type Data = {
  name: string;
};

let userCredential = null;

export default async function auth(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const oauth2Client = new google.auth.OAuth2(
      "632674726779-si25t7avn6vl98aglo75r5rlh1sfp20q.apps.googleusercontent.com",
      "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",
      "http://localhost:3000/google/callback",
    );

    if (req.method === "GET") {
      const scopes = ["https://www.googleapis.com/auth/youtube"];

      // Generate a url that asks permissions for the Drive activity scope
      const authorizationUrl = oauth2Client.generateAuthUrl({
        /** Pass in the scopes array defined above.
         * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
        scope: scopes,
        // Enable incremental authorization. Recommended as a best practice.
        include_granted_scopes: true,
      });

      res.send({ Location: authorizationUrl });
    }

    if (req.method === "POST") {
      const q = url.parse(req.body.url, true).query;
      const { tokens } = await oauth2Client.getToken(q.code);
      res.send(tokens.access_token);
    }
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}
