import { Metadata } from 'next'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { allPosts, Post } from 'contentlayer/generated'

export const metadata: Metadata = {
  title: 'Последние посты',
  description:
    'В блоге Я публикую свои мысли о происходящем и просто философствую о бытие',
}

function getLatesPost(limit: number): JSX.Element[] {
  return allPosts
    .sort((a: Post, b: Post) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
    )
    .filter((n: { isPublished: boolean }) => n.isPublished === true)
    .slice(0, limit)
    .map((post: Post) => (
      <li className='w-full p-8 border border-gray-200 rounded-lg'>
        <article>
          <Link
            href={`/posts/${post.slug}`}
            className='group flex flex-col w-full'
          >
            <h3 className='text-xl font-semibold group-hover:underline'>
              <Balancer>{post.title}</Balancer>
            </h3>
            <p className='text-base font-normal mt-4'>{post.summary}</p>
            <div className='text-base font-semibold mt-4'>Читать дальше</div>
          </Link>
        </article>
      </li>
    ))
}

function LatestPage(): JSX.Element {
  const latestPost = getLatesPost(10)
  const count = latestPost.length

  return (
    <section className='flex flex-col w-full max-w-6xl pt-32'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center w-full h-20 pl-5 pr-10'>
          <h1 className='text-4xl font-semibold'>Последние посты</h1>
          <p className='hidden sm:block text-lg font-normal'>{count} статей</p>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-auto gap-8'>
          {latestPost}
        </ul>
      </div>
    </section>
  )
}

export default LatestPage
