import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

import { allBlogs } from 'contentlayer/generated'

export const metadata = {
  title: 'Посты',
  description:
    'В блоге Я публикую свои мысли о происходящем и просто философствую о бытие',
}

const LMT = 12

function BlogPage(): JSX.Element {
  return (
    <section className='flex flex-col w-full max-w-6xl pt-32'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center w-full h-20 pl-5 pr-10'>
          <h1 className='text-4xl font-semibold'>Философия</h1>
          <p className='hidden sm:block text-lg font-normal'>12 статей</p>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-auto gap-8'>
          {allBlogs
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1
              }

              return 1
            })
            .map((post) => (
              <li key={post.slug} className='w-full p-8 border rounded-lg'>
                <article>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='flex flex-col w-full'
                  >
                    <h3 className='text-xl font-semibold'>
                      <Balancer>{post.title}</Balancer>
                    </h3>
                    <p className='text-base font-normal mt-4'>{post.summary}</p>
                    <div className='text-base font-semibold mt-4'>
                      Читать дальше
                    </div>
                  </Link>
                </article>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default BlogPage
1
