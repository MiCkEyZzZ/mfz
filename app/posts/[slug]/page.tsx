import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

import ViewCounter from '../view-counter';
import { Breadcrumbs, Comments, Mdx } from 'components';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, publishedAt: publishedTime, summary: description, image, slug } = post;

  const ogImage = image
    ? `http://localhost:3000/${image}`
    : `http://localhost:3000/api/og?title=${title}`;

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
  };
}

const links = [
  { name: 'I глава', path: '/#' },
  { name: 'II глава', path: '/#' },
  { name: 'III глава', path: '/#' },
  { name: 'IV глава', path: '/#' },
  { name: 'V глава', path: '/#' },
  { name: 'VI глава', path: '/#' },
];

export async function Post({ params }: any): Promise<JSX.Element> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  function renderContentLink(): JSX.Element[] {
    return links.map((link) => {
      return (
        <li key={link.name} className="mt-3.5">
          <a
            href={link.path}
            className="text-smb text-[#414141] opacity-70 hover:opacity-100 dark:text-white"
          >
            {link.name}
          </a>
        </li>
      );
    });
  }

  return (
    <section className="flex w-full max-w-6xl flex-col">
      <script type="application/ld+json">{JSON.stringify(post.structuredData)}</script>
      <Breadcrumbs title={post.title} tag={post.tag} />
      <div className="flex flex-row-reverse items-start justify-center pt-5">
        <aside className="sticky top-36 ml-auto hidden h-96 w-full max-w-xs overflow-auto lg:flex">
          <nav>
            <h2 className="mb-5 text-base font-semibold uppercase text-[#414141] dark:text-white">
              Содержание
            </h2>
            <ul className="mt-3.5">{renderContentLink()}</ul>
          </nav>
        </aside>
        <div className="flex w-full flex-col lg:max-w-2xlx">
          <Mdx code={post.body.code} />
          <div className="mt-5 flex flex-row rounded-md py-1 tracking-tighter">
            <span className="mr-2 font-semibold text-[#414141] dark:text-white">
              Дата публикации:
            </span>
            <time dateTime={post.publishedAt} className="italic text-gray-500">
              {format(parseISO(post.publishedAt), 'dd MMMM yyyy', {
                locale: ru,
              })}
            </time>
          </div>
          <ViewCounter slug={post.slug} trackView={false} />
          <Comments />
        </div>
      </div>
    </section>
  );
}

export default Post;
