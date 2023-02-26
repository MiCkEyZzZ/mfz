import type { Metadata } from 'next';

import { allPosts, Post } from 'contentlayer/generated';
import { PostCard } from 'components';
import { convertName } from 'lib/helper';

export const metadata: Metadata = {
  title: 'Посты',
  description: 'В блоге Я публикую свои мысли о происходящем и просто философствую о бытие',
};

function renderPosts(arr: Post[]): JSX.Element[] {
  return arr
    .sort((a, b) => (Number(new Date(a.publishedAt)) > Number(new Date(b.publishedAt)) ? -1 : 1))
    .map((post) => (
      <li key={post.slug} className="w-full rounded-lg border border-gray-200 p-8">
        <PostCard post={post} />
      </li>
    ));
}

function BlogPage(): JSX.Element {
  const posts = renderPosts(allPosts);
  const count = allPosts.length;

  return (
    <section className="flex w-full max-w-6xl flex-col pt-32">
      <div className="flex flex-col">
        <div className="flex h-20 w-full flex-row items-center justify-between pl-5 pr-10">
          <h1 className="text-4xl font-semibold">Философия</h1>
          <p className="hidden text-lg font-normal sm:block">{count} статей</p>
        </div>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-auto">{posts}</ul>
      </div>
    </section>
  );
}

export default BlogPage;
