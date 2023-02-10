import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from 'lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString()
    const data = await prisma.views.findUnique({
      where: { slug: String(slug) },
    })

    const views = Number(data[0].count)

    if (req.method === 'POST') {
      await prisma.views.update({
        where: {
          slug: slug,
        },
        data: {
          count: views + 1,
        },
      })
    }
  } catch (err) {}
}
