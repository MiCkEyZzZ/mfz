import { Metadata } from 'next';

import { allPosts, Post } from 'contentlayer/generated';
import { PostCard } from 'components';
import { getDeclensionsWorld } from 'lib/helper';

export const metadata: Metadata = {
  title: 'Последние посты',
  description: 'В блоге Я публикую свои мысли о происходящем и просто философствую о бытие',
};

function getLatesPost(limit: number): JSX.Element[] {
  return allPosts
    .sort((a: Post, b: Post) => (new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1))
    .filter((n: { isPublished: boolean }) => n.isPublished === true)
    .slice(0, limit)
    .map((post: Post) => (
      <li
        key={post.title}
        className="w-full rounded-lg border border-gray-200 bg-transparent p-8 text-gray-900 dark:border-gr-2 dark:bg-gr-2"
      >
        <PostCard post={post} />
      </li>
    ));
}

function LatestPage(): JSX.Element {
  const latestPost = getLatesPost(10);
  const count = latestPost.length;
  const postWord = getDeclensionsWorld(count);

  return (
    <section className="flex w-full max-w-6xl flex-col pt-32">
      <div className="flex flex-col">
        <div className="flex h-20 w-full flex-row items-center justify-between pl-5 pr-10">
          <h1 className="text-4xl font-semibold text-[#414141] dark:text-white">
            Последние статьи
          </h1>
          <p className="hidden text-lg font-normal text-[#414141] dark:text-white sm:block">
            {count} {postWord}
          </p>
        </div>
        <ul className="mt-3 grid grid-cols-1 gap-8 sm:mt-0 md:grid-cols-auto">{latestPost}</ul>
      </div>
    </section>
  );
}

export default LatestPage;
