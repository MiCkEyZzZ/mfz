import { NextApiRequest, NextApiResponse } from 'next';
import * as z from 'zod';
import { getServerSession } from 'next-auth/next';

import { db } from 'lib/prisma';
import { AuthOptions } from 'next-auth';

async function handler(req: NextApiRequest, res: NextApiResponse) {}
