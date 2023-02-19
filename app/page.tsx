import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { allPosts, Post } from 'contentlayer/generated'

function mergeSort(arr: Post[]): Post[] {
  if (arr.length === 1) return arr

  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left: Post[], right: Post[]): Post[] {
  const results: Post[] = []

  while (left.length && right.length) {
    left[0] < right[0]
      ? results.push(left.shift())
      : results.push(right.shift())

    return [...results, ...left, ...right]
  }
}

function getLatestPost(limit: number): JSX.Element[] {
  return mergeSort(allPosts)
    .sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
    )
    .filter((n: { isPublished: boolean }) => n.isPublished === true)
    .slice(0, limit)
    .map((post: Post) => (
      <li key={post.slug} className='w-full first:mt-0 mt-12 text-gray-900'>
        <article className='text-black'>
          <Link href={`/post/${post.slug}`} className='group flex flex-col'>
            <h3 className='text-md leading-5 font-bold group-hover:underline transition-all duration-300'>
              <Balancer>{post.title}</Balancer>
            </h3>
            <p className='w-full leading-6 mt-4 opacity-70'>{post.summary}</p>
            <div className='flex flex-row items-center w-full h-7 mt-4'>
              <span className='text-base font-semibold'>Читать дальше</span>
            </div>
          </Link>
        </article>
      </li>
    ))
}

export default function HomePage(): JSX.Element {
  const newestPosts = getLatestPost(20)

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
            <li className='flex flex-col mt-2 mr-2 overflow-hidden'>
              <Link href='#' className='text-xs px-2 py-2 border rounded-xl'>
                Философия
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 overflow-hidden'>
              <Link href='#' className='text-xs px-2 py-2 border rounded-xl'>
                Next
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 overflow-hidden'>
              <Link href='#' className='text-xs px-2 py-2 border rounded-xl'>
                Rust
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 overflow-hidden'>
              <Link href='#' className='text-xs px-2 py-2 border rounded-xl'>
                Религия
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 overflow-hidden'>
              <Link href='#' className='text-xs px-2 py-2 border rounded-xl'>
                Animation
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 overflow-hidden'>
              <Link href='#' className='text-xs px-2 py-2 border rounded-xl'>
                Node
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 overflow-hidden'>
              <Link href='#' className='text-xs px-2 py-2 border rounded-xl'>
                React
              </Link>
            </li>
          </ul>
        </div>
        <div className='md:sticky top-8 w-full row-span-1 md:row-span-1 col-span-2 md:col-span-1'>
          <h2 className='text-base uppercase mb-9'>Популярные посты</h2>
          <ul className='flex flex-col w-full max-w-xs'>
            <li className='w-full mb-4'>
              <div>
                <Link
                  href='/animation/css-transitions/'
                  className='font-medium hover:underline'
                >
                  Кант И. "Логика. Антропология"
                </Link>
              </div>
            </li>
            <li className='w-full mb-4'>
              <div>
                <Link
                  href='/animation/css-transitions/'
                  className='font-medium hover:underline hover:transition transition-all duration-300'
                >
                  Тейяр де Шарден П. Феномен человека
                </Link>
              </div>
            </li>
            <li className='w-full mb-4'>
              <div>
                <Link
                  href='/animation/css-transitions/'
                  className='font-medium hover:underline'
                >
                  Мавр. Принципы этики
                </Link>
              </div>
            </li>
            <li className='w-full mb-4'>
              <div>
                <Link
                  href='/animation/css-transitions/'
                  className='font-medium hover:underline'
                >
                  Аристотель. Этика
                </Link>
              </div>
            </li>
            <li className='w-full mb-4'>
              <div>
                <Link
                  href='/animation/css-transitions/'
                  className='font-medium hover:underline'
                >
                  О достоинстве и приумножении наук
                </Link>
              </div>
            </li>
            <li className='w-full mb-0'>
              <div>
                <Link
                  href='/animation/css-transitions/'
                  className='font-medium hover:underline'
                >
                  Энгельс Ф. Происхождение семьи...
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
