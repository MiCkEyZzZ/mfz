import type { Metadata } from 'next';

import { allPosts, Post } from 'contentlayer/generated';
import { PostCard } from 'components';
import { convertName, getDeclensionsWorld } from 'lib/helper';
import { IGroupPost } from 'interfaces';

export const metadata: Metadata = {
  title: 'Посты',
  description: 'В блоге Я публикую свои мысли о происходящем и просто философствую о бытие',
};

function renderPosts(arr: Post[]): JSX.Element[] {
  return arr
    .sort((a, b) => (Number(new Date(a.publishedAt)) > Number(new Date(b.publishedAt)) ? -1 : 1))
    .map((post) => (
      <li
        key={post.slug}
        className="w-full rounded-lg border border-gray-200 bg-transparent p-8 dark:border-gr-2 dark:bg-gr-2"
      >
        <PostCard post={post} />
      </li>
    ));
}

function getGroupePosts(arr: Post[]): IGroupPost[] {
  return Array.from(new Set(arr.map((s) => s.tag))).map((lab) => {
    return {
      label: lab,
      data: arr.filter((s) => s.tag === lab).map((edit) => edit),
    };
  });
}

function PostsPage(): JSX.Element {
  const blogs = getGroupePosts(allPosts);

  return (
    <section className="flex w-full max-w-6xl flex-col pt-32">
      <div className="flex flex-col">
        {blogs.map((blog) => (
          <div key={blog.label}>
            <div className="flex h-20 w-full flex-row items-center justify-between pl-5 pr-10">
              <h1 className="text-4xl font-semibold text-[#414141] dark:text-white">
                {convertName(blog.label)}
              </h1>
              <p className="hidden text-lg font-normal text-[#414141] dark:text-white sm:block">
                {blog.data.length} {getDeclensionsWorld(blog.data.length)}
              </p>
            </div>
            <ul className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-auto">
              {renderPosts(blog.data)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PostsPage;
