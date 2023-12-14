import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyAFWh93CHpC1Jh4rUUwvblcwPQViy5h_sU`,
    );

    return await res.json();
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error revalidating");
  }
  // res.status(200).json({ name: "John Doe" });
}
