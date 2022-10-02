import type { NextApiRequest, NextApiResponse } from 'next'

type HelloResponse = {
  name: string
}

const Hello = (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  res.status(200).json({ name: 'John Doe' })
}

export default Hello
