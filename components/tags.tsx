import Link from 'next/link'
import { Post } from 'contentlayer/generated'

import { capitalize } from 'lib/helper'

type Props = {
  posts: Post[]
}

function renderTags(posts: Post[]): JSX.Element[] {
  return posts.map((post: Post) => {
    return (
      <li
        key={post.slug}
        className='flex flex-col mt-2 mr-2 overflow-hidden hover:scale-95 transform-gpu'
      >
        <Link
          href={`posts/${post.tag}`}
          className='text-sm px-3 py-1.5 text-black hover:text-white bg-transparent hover:bg-black border hover:border-black rounded-lg  transition-all duration-300'
        >
          {capitalize(post.tag)}
        </Link>
      </li>
    )
  })
}

function Tags({ posts }: Props): JSX.Element {
  const mostPopularTags = renderTags(posts)

  return <ul className='flex flex-wrap w-full max-w-xs'>{mostPopularTags}</ul>
}

export default Tags
