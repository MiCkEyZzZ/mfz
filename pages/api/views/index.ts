import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from 'lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { slug, count } = req.body
    const result = await prisma.views.create({
      data: {
        slug,
        count,
      },
    })
    return res.status(200).json(result)
  } catch (err) {
    return res.status(500).json({ message: err.messsage })
  }
}
