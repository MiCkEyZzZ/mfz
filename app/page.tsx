import Link from 'next/link'
import { allBlogs } from 'contentlayer/generated'

import information from 'lib/information'

export const metadata = {
  description: 'Разработчик, философ',
  openGraph: {
    title: 'Михаил Журавлёв',
    description: 'Разработчик, философ',
    url: 'https://mfz.ru',
    siteName: 'Михаил Журавлёв',
    images: [],
    locale: 'ru-RU',
    type: 'website',
  },
}

function getLatestPost(limit: number): JSX.Element[] {
  return allBlogs
    .sort((a: any, b: any) => a.isPublished - b.isPublished)
    .filter((n) => n.isPublished === true)
    .splice(1, limit)
    .sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
    )
    .map((post) => (
      <li key={post.slug} className='w-full first:mt-0 mt-12'>
        <article className='text-black'>
          <Link href={`/blog/${post.slug}`} className='flex flex-col'>
            <h3 className='text-md font-bold'>{post.title}</h3>
            <p className='w-full mt-4'>{post.summary}</p>
            <div className='flex flex-row items-center w-full h-7 mt-4'>
              <span className='text-base font-semibold'>Читать дальше</span>
            </div>
          </Link>
        </article>
      </li>
    ))
}

function getPopularPost(limit: number) {
  console.log('Populate Posts', limit)
}

export default function HomePage(): JSX.Element {
  const newestPosts = getLatestPost(20)
  const populatePosts = getPopularPost(10)

  return (
    <section className='flex flex-col w-full max-w-6xl'>
      <div className='grid grid-flow-row-1 md:grid-flow-row-3 md:grid-flow-col md:gap-x-24 gap-y-12 md:gap-y-16 w-full items-start pt-16'>
        <div className='w-full col-span-2 row-span-3'>
          <h2 className='text-base uppercase mb-9'>Недавно опубликовано</h2>
          <ul className='flex flex-col w-full max-w-1xl'>{newestPosts}</ul>
        </div>
        <div className='w-full col-span-2 md:col-span-1'>
          <h2 className='text-base uppercase mb-9'>Популярные категории</h2>
          <ul className='flex flex-wrap w-full max-w-xs'>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                Философия
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                Этика
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                Next
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                Rust
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                Animation
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                Node
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                React
              </Link>
            </li>
          </ul>
        </div>
        <div className='md:sticky w-full row-span-1 md:row-span-1 col-span-2 md:col-span-1'>
          <h2 className='text-base uppercase mb-9'>Популярные посты</h2>
          <ul className='flex flex-wrap w-full max-w-xs h-506 border'></ul>
        </div>
      </div>
    </section>
  )
}
