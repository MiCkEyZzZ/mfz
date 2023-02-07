import { Breadcrumbs } from 'components'
import Mdx from 'components/mdx'
import { allBlogs } from 'contentlayer/generated'

async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

async function generateMetadata({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug)
  const { title, summary } = post

  return {
    title,
    summary,
  }
}

async function Blog({ params }): Promise<JSX.Element> {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) return

  return (
    <section className='flex flex-col w-full max-w-6xl'>
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
          <div className='mt-5 py-1 tracking-tighter rounded-md'>
            Дата публикации: {post.publishedAt}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Blog
