'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

type PostView = {
  slug: string;
  count: number;
};

async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);

  return res.json();
}

function ViewCounter({ slug, trackView }: { slug: string; trackView: boolean }) {
  const result = useSWR<PostView[]>('/api/views', fetcher);
  // console.log(data && data.find((view) => view.slug === slug))
  console.log(result);
  console.log(slug);
  // const viewsForSlug = data && data.find((view) => view.slug === slug)
  // const views = new Number(viewsForSlug?.count || 0)

  useEffect(() => {}, []);

  return (
    <div className="flex flex-row">
      <p className="font-semibold">Просмотров:</p>
      {/* <span className='ml-2'>{data ? `${views.toString()}` : ''}</span> */}
      <span className="ml-2">0</span>
    </div>
  );
}

export default ViewCounter;
