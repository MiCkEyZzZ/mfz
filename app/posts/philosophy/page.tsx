import { Metadata } from 'next';

import { PostCard } from 'components';
import { allPosts, Post } from 'contentlayer/generated';
import { getDeclensionsWorld } from 'lib/helper';

export const metadata: Metadata = {
  title: 'Философия статьи',
  description: 'В блоге Я публикую свои мысли о происходящем и просто философствую о бытие',
};

function getPosts(type: string): Post[] {
  return allPosts.filter((post) => post.tag === type);
}

function PhilosophyPage(): JSX.Element {
  const posts = getPosts('philosophy');
  const count = posts.length;
  const postWord = getDeclensionsWorld(count);

  return (
    <section className="flex w-full max-w-6xl flex-col pt-32">
      <div className="flex flex-col">
        <div className="flex h-20 w-full flex-row items-center justify-between pl-5 pr-10">
          <h1 className="text-4xl font-semibold">Философия</h1>
          <p className="hidden text-lg font-normal sm:block">
            {count} {postWord}
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-auto">
          {posts.map((post) => (
            <li key={post.slug} className="w-full rounded-lg border border-gray-200 p-8">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PhilosophyPage;
