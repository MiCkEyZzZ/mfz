import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'

import { Breadcrumbs, Mdx } from 'components'
import ViewCounter from '../view-counter'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post

  const ogImage = image
    ? `http://localhost:3000/${image}`
    : `http://localhost:3000/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `http://localhost:3000/post/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  }
}

export async function Post({ params }): Promise<JSX.Element> {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className='flex flex-col w-full max-w-6xl'>
      <script type='application/ld+json'>
        {JSON.stringify(post.structuredData)}
      </script>
      <Breadcrumbs title={post.title} />
      <div className='flex flex-row-reverse justify-center items-start pt-5'>
        <aside className='sticky top-36 hidden lg:flex w-full max-w-xs h-96 ml-auto overflow-auto'>
          <nav>
            <h2 className='text-base font-semibold uppercase mb-5'>
              Содержание
            </h2>
            <ul className='mt-3.5'>
              <li className='mt-3.5'>
                <a href='#' className='text-smb opacity-70'>
                  Пример ссылки содержание контента
                </a>
              </li>
              <li className='mt-3.5'>
                <a href='#' className='text-smb opacity-70'>
                  Пример ссылки содержание
                </a>
              </li>
              <li className='mt-3.5'>
                <a href='#' className='text-smb opacity-70'>
                  Пример ссылки содержание контента
                </a>
              </li>
              <li className='mt-3.5'>
                <a href='#' className='text-smb opacity-70'>
                  Пример ссылки содержание
                </a>
              </li>
              <li className='mt-3.5'>
                <a href='#' className='text-smb opacity-70'>
                  Пример ссылки содержание контента
                </a>
              </li>
              <li className='mt-3.5'>
                <a href='#' className='text-smb opacity-70'>
                  Пример ссылки содержание контента
                </a>
              </li>
              <li className='mt-3.5'>
                <a href='#' className='text-smb opacity-70'>
                  Пример ссылки содержание
                </a>
              </li>
              <li className='mt-3.5'>
                <a href='#' className='text-smb opacity-70'>
                  Пример ссылки содержание контента
                </a>
              </li>
              <li className='mt-3.5'>
                <a href='#' className='text-smb opacity-70'>
                  Пример ссылки содержание контента
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <article className='flex flex-col w-full lg:max-w-2xlx'>
          <Mdx code={post.body.code} />
          <div className='flex flex-row mt-5 py-1 tracking-tighter rounded-md'>
            <span className='font-semibold mr-2'>Дата публикации:</span>
            <time dateTime={post.publishedAt} className='text-gray-500 italic'>
              {format(parseISO(post.publishedAt), 'dd MMMM yyyy', {
                locale: ru,
              })}
            </time>
          </div>
          <ViewCounter slug={post.slug} trackView={false} />
        </article>
      </div>
    </section>
  )
}

export default Post