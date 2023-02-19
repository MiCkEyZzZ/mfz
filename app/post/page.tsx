import type { Metadata } from 'next'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

import { allPosts } from 'contentlayer/generated'

export const metadata: Metadata = {
  title: 'Посты',
  description:
    'В блоге Я публикую свои мысли о происходящем и просто философствую о бытие',
}

function renderPosts() {
  return allPosts
    .sort((a, b) =>
      Number(new Date(a.publishedAt)) > Number(new Date(b.publishedAt)) ? -1 : 1
    )
    .map((post) => (
      <li
        key={post.slug}
        className='w-full p-8 border border-gray-200 rounded-lg'
      >
        <article>
          <Link
            href={`/post/${post.slug}`}
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

function BlogPage(): JSX.Element {
  const count = allPosts.length

  return (
    <section className='flex flex-col w-full max-w-6xl pt-32'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center w-full h-20 pl-5 pr-10'>
          <h1 className='text-4xl font-semibold'>Философия</h1>
          <p className='hidden sm:block text-lg font-normal'>{count} статей</p>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-auto gap-8'>
          {renderPosts()}
        </ul>
      </div>
    </section>
  )
}

export default BlogPage
