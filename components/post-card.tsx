import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

import { Post } from 'contentlayer/generated'

type Props = {
  post: Post
}

function PostCard({ post }: Props): JSX.Element {
  return (
    <article className='text-black'>
      <Link href={`/posts/${post.slug}`} className='group flex flex-col w-full'>
        <h3 className='text-md leading-7 font-semibold group-hover:underline transition-all duration-300'>
          <Balancer>{post.title}</Balancer>
        </h3>
        <p className='w-full text-base leading-6 mt-4 text-black opacity-70'>
          {post.summary}
        </p>
        <div className='flex flex-row items-center w-full h-7 mt-4'>
          <span className='text-base font-semibold'>Читать дальше</span>
        </div>
      </Link>
    </article>
  )
}

export default PostCard
