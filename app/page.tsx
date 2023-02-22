import Link from 'next/link'

import { allPosts, Post } from 'contentlayer/generated'
import { PostCard, Tags } from 'components'
import { getAllTags } from 'lib/tags'

const posts = [
  { name: 'Кант И. "Логика. Антропология"', path: '#' },
  { name: 'Тейяр де Шарден П. Феномен человека', path: '#' },
  { name: 'Мавр. Принципы этики', path: '#' },
  { name: 'Аристотель. Этика', path: '#' },
  { name: 'О достоинстве и приумножении наук', path: '#' },
  { name: 'Энгельс Ф. Происхождение семьи...', path: '#' },
]

function mergeSort(arr: Post[]) {
  if (arr.length === 1) return arr

  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left: Post[], right: Post[]) {
  const results: Post[] = []

  while (left.length && right.length) {
    left[0] < right[0]
      ? results.push(left.shift() as Post)
      : results.push(right.shift() as Post)

    return [...results, ...left, ...right]
  }
}

function getLatestPost(limit: number): JSX.Element[] {
  return mergeSort(allPosts)
    .sort((a: Post, b: Post) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
    )
    .filter((n: { isPublished: boolean }) => n.isPublished === true)
    .slice(0, limit)
    .map((post: Post) => (
      <li key={post.slug} className='w-full first:mt-0 mt-12 text-gray-900'>
        <PostCard post={post} />
      </li>
    ))
}

function getPopularPosts(): JSX.Element[] {
  return posts.map((post) => (
    <li key={post.name} className='w-full mb-4'>
      <div>
        <Link
          href={post.path}
          className='font-semibold text-black hover:underline'
        >
          {post.name}
        </Link>
      </div>
    </li>
  ))
}

async function getTags(): Promise<string[]> {
  const tags = await getAllTags()

  return Object.keys(tags)
}

export default async function HomePage() {
  const newestPosts = getLatestPost(20)
  const popularPosts = getPopularPosts()
  const tags = await getTags()

  return (
    <section className='flex flex-col w-full max-w-6xl'>
      <div className='grid grid-flow-row-1 md:grid-flow-row-3 md:grid-flow-col md:gap-x-24 gap-y-12 md:gap-y-16 w-full items-start pt-16'>
        <div className='w-full col-span-2 row-span-3'>
          <h2 className='text-base uppercase mb-9'>Недавно опубликовано</h2>
          <ul className='flex flex-col w-full max-w-1xl'>{newestPosts}</ul>
        </div>
        <div className='w-full col-span-2 md:col-span-1'>
          <h2 className='text-base uppercase mb-9'>Популярные категории</h2>
          <Tags tags={tags} />
        </div>
        <div className='md:sticky top-8 w-full row-span-1 md:row-span-1 col-span-2 md:col-span-1'>
          <h2 className='text-base uppercase mb-9'>Популярные статьи</h2>
          <ul className='flex flex-col w-full max-w-xs'>{popularPosts}</ul>
        </div>
      </div>
    </section>
  )
}
