import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    const { id } = req.query;

    if (!id || typeof id !== "string") throw new Error("Invalid ID");

    const foundUser = await prisma.user.findUnique({
      where: { id },
    });

    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: id,
        },
      },
    });

    return res.status(200).json({ ...foundUser, followersCount });
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
}
