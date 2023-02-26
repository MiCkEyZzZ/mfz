import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { Post } from 'contentlayer/generated';

type Props = {
  post: Post;
};

function PostCard({ post }: Props): JSX.Element {
  return (
    <article className="text-black">
      <Link href={`/posts/${post.slug}`} className="group flex w-full flex-col">
        <h3 className="text-md font-semibold leading-7 transition-all duration-300 group-hover:underline">
          <Balancer>{post.title}</Balancer>
        </h3>
        <p className="mt-4 w-full text-base leading-6 text-black opacity-70">{post.summary}</p>
        <div className="mt-4 flex h-7 w-full flex-row items-center">
          <span className="text-base font-semibold">Читать дальше</span>
        </div>
      </Link>
    </article>
  );
}

export default PostCard;
