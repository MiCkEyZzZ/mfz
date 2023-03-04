import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { PostCardProps } from 'interfaces';

function PostCard({ post }: PostCardProps): JSX.Element {
  return (
    <article className="bg-transparent text-black">
      <Link href={`${post.tag}/${post.slug}`} className="group flex w-full flex-col">
        <h3 className="text-md font-semibold leading-7 text-[#414141] transition-all duration-300 group-hover:underline dark:text-white">
          <Balancer>{post.title}</Balancer>
        </h3>
        <p className="mt-4 w-full text-base leading-6 text-[#414141] opacity-70 dark:text-white">
          {post.summary}
        </p>
        <div className="mt-4 flex h-7 w-full flex-row items-center">
          <span className="text-base font-semibold text-[#414141] dark:text-white">
            Читать дальше
          </span>
        </div>
      </Link>
    </article>
  );
}

export default PostCard;
