// import type { Metadata } from 'next';
// import { notFound } from 'next/navigation';
// import { allPosts } from 'contentlayer/generated';
// import { format, parseISO } from 'date-fns';
// import { ru } from 'date-fns/locale';

// import ViewCounter from '../view-counter';
// import { Breadcrumbs, Comments, Mdx } from 'components';
// import { PostPageProps } from 'interfaces';

// export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
//   return allPosts.map((post) => ({
//     slug: post.slugAsParams.split('/'),
//   }));
// }

// export async function generateMetadata({ params }: PostPageProps): Promise<Metadata | undefined> {
//   const href = params?.slug?.join('/') || '';
//   const post = allPosts.find((post) => post.slugAsParams === href);

//   if (!post) {
//     return;
//   }

//   const { title, publishedAt: publishedTime, summary: description, image, slug } = post;

//   const ogImage = image
//     ? `http://localhost:3000/${image}`
//     : `http://localhost:3000/api/og?title=${title}`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: 'article',
//       publishedTime,
//       url: `http://localhost:3000/post/${slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//   };
// }

// export async function PostPage({ params }: PostPageProps): Promise<JSX.Element> {
//   const slug = params?.slug?.join('/') || '';
//   const post = allPosts.find((post) => post.slugAsParams === slug);

//   if (!post) {
//     notFound();
//   }

//   return (
//     <section className="flex w-full max-w-6xl flex-col">
//       <script type="application/ld+json">{JSON.stringify(post.structuredData)}</script>
//       <Breadcrumbs title={post.title} tag={post.tag} />
//       <div className="flex flex-row-reverse items-start justify-center pt-5">
//         <aside className="sticky top-36 ml-auto hidden h-96 w-full max-w-xs overflow-auto lg:flex">
//           <nav>
//             <h2 className="mb-5 text-base font-semibold uppercase text-[#414141] dark:text-white">
//               Содержание
//             </h2>
//             {/* <Tree /> */}
//           </nav>
//         </aside>
//         <div className="flex w-full flex-col lg:max-w-2xlx">
//           <Mdx code={post.body.code} />
//           <div className="mt-5 flex flex-row rounded-md py-1 tracking-tighter">
//             <span className="mr-2 font-semibold text-[#414141] dark:text-white">
//               Дата публикации:
//             </span>
//             <time dateTime={post.publishedAt} className="italic text-gray-500">
//               {format(parseISO(post.publishedAt), 'dd MMMM yyyy', {
//                 locale: ru,
//               })}
//             </time>
//           </div>
//           <ViewCounter slug={post.slug} trackView={false} />
//           <Comments />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PostPage;
'use client';
import { Metadata } from 'next';

import { PostCard } from 'components';
import { allPosts, Post } from 'contentlayer/generated';
import { changeTagsPath, convertName, getDeclensionsWorld } from 'lib/helper';
import { usePathname } from 'next/navigation';

// export const metadata: Metadata = {
//   title: 'Анимация статьи',
//   description: 'В блоге Я публикую свои мысли о происходящем и просто философствую о бытие',
// };

function getPosts(type: string): Post[] {
  return allPosts.filter((post) => post.tag === type);
}

function CategoryPage(): JSX.Element {
  let pathname = usePathname() || '/';
  let title = changeTagsPath(pathname.split('/').slice(2).join(''));
  const posts = getPosts(title);
  const count = posts.length;
  const postWord = getDeclensionsWorld(count);

  return (
    <section className="flex w-full max-w-6xl flex-col pt-32">
      <div className="flex flex-col">
        <div className="flex h-20 w-full flex-row items-center justify-between pl-5 pr-10">
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            {convertName(title)}
          </h1>
          <p className="hidden text-lg font-normal text-black dark:text-white sm:block">
            {count} {postWord}
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-auto">
          {posts.map((post) => (
            <li key={post.title} className="w-full rounded-lg border border-gray-200 p-8">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CategoryPage;
