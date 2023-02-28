import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

import ViewCounter from '../view-counter';
import { Breadcrumbs, Comments, Mdx } from 'components';
import { PostPageProps } from 'interfaces';

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata | undefined> {
  const href = params?.slug?.join('/') || '';
  const post = allPosts.find((post) => post.slugAsParams === href);

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

export async function PostPage({ params }: PostPageProps): Promise<JSX.Element> {
  const slug = params?.slug?.join('/') || '';
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
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
            {/* <Tree /> */}
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

export default PostPage;
