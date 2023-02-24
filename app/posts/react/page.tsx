import { Metadata } from 'next'

import { PostCard } from 'components'
import { allPosts, Post } from 'contentlayer/generated'
import { getDeclensionsWorld } from 'lib/helper'

export const metadata: Metadata = {
  title: 'React статьи',
  description:
    'В блоге Я публикую свои мысли о происходящем и просто философствую о бытие',
}

function getPosts(type: string): Post[] {
  return allPosts.filter((post) => post.tag === type)
}

function ReactPage(): JSX.Element {
  const posts = getPosts('react')
  const count = posts.length
  const postWord = getDeclensionsWorld(count)

  return (
    <section className='flex flex-col w-full max-w-6xl pt-32'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center w-full h-20 pl-5 pr-10'>
          <h1 className='text-4xl font-semibold'>React</h1>
          <p className='hidden sm:block text-lg font-normal'>
            {count} {postWord}
          </p>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-auto gap-8'>
          {posts.map((post) => (
            <li
              key={post.slug}
              className='w-full p-8 border border-gray-200 rounded-lg'
            >
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ReactPage
