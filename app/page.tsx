import Link from 'next/link';

import siteConfig from '../config/siteConfig';
import { allPosts, Post } from 'contentlayer/generated';
import { PostCard, Tags } from 'components';
import { getAllTags } from 'lib/tags';

const posts = [
  { name: 'Кант И. "Логика. Антропология"', path: '#' },
  { name: 'Тейяр де Шарден П. Феномен человека', path: '#' },
  { name: 'Мавр. Принципы этики', path: '#' },
  { name: 'Аристотель. Этика', path: '#' },
  { name: 'О достоинстве и приумножении наук', path: '#' },
  { name: 'Интерактивное руководство по Flexbox', path: '#' },
  { name: 'Понимание useMemo и useCallback', path: '#' },
  { name: 'Для чего нужна асинхронность в Rust?', path: '#' },
  { name: 'Примитивы в Rust', path: '#' },
  { name: 'Создание однопоточного веб-сервера на Rust', path: '#' },
];

function mergeSort(arr: Post[]) {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: Post[], right: Post[]) {
  const results: Post[] = [];

  while (left.length && right.length) {
    left[0] < right[0] ? results.push(left.shift() as Post) : results.push(right.shift() as Post);

    return [...results, ...left, ...right];
  }
}

function getLatestPost(limit: number): JSX.Element[] {
  return mergeSort(allPosts)
    .sort((a: Post, b: Post) => (new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1))
    .filter((n: { isPublished: boolean }) => n.isPublished === true)
    .slice(0, limit)
    .map((post: Post) => (
      <li key={post.slug} className="mt-12 w-full text-[#414141] first:mt-0 dark:text-white">
        <PostCard post={post} />
      </li>
    ));
}

function getPopularPosts(): JSX.Element[] {
  return posts.map((post) => (
    <li key={post.name} className="mb-4 w-full">
      <div>
        <Link
          href={post.path}
          className="font-semibold text-[#414141] hover:underline dark:text-white"
        >
          {post.name}
        </Link>
      </div>
    </li>
  ));
}

async function getTags(): Promise<string[]> {
  const tags = await getAllTags(allPosts);

  return Object.keys(tags);
}

export default async function HomePage(): Promise<JSX.Element> {
  const { recentlyPub, popularCat, popularArt } = siteConfig;

  const newestPosts = getLatestPost(20);
  const popularCategory = await getTags();
  const popularPosts = getPopularPosts();

  return (
    <section className="flex w-full max-w-6xl flex-col">
      <div className="grid-flow-row-1 md:grid-flow-row-3 grid w-full items-start gap-y-12 pt-16 md:grid-flow-col md:gap-x-24 md:gap-y-16">
        <div className="col-span-2 row-span-3 w-full">
          <h2 className="mb-9 text-base uppercase text-[#414141] dark:text-white">{recentlyPub}</h2>
          <ul className="flex w-full max-w-1xl flex-col">{newestPosts}</ul>
        </div>
        <div className="col-span-2 w-full md:col-span-1">
          <h2 className="mb-9 text-base uppercase text-[#414141] dark:text-white">{popularCat}</h2>
          <Tags tags={popularCategory} />
        </div>
        <div className="top-8 col-span-2 row-span-1 w-full md:sticky md:col-span-1 md:row-span-1">
          <h2 className="mb-9 text-base uppercase text-[#414141] dark:text-white">{popularArt}</h2>
          <ul className="flex w-full max-w-xs flex-col">{popularPosts}</ul>
        </div>
      </div>
    </section>
  );
}
