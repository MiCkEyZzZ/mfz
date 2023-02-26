import Link from 'next/link';

import { changeTagsPath, convertName } from 'lib/helper';

type Props = {
  tags: string[];
};

function renderTags(tags: string[]): JSX.Element[] {
  return tags.map((tag: string) => (
    <li key={tag} className="mt-2 mr-2 flex transform-gpu flex-col overflow-hidden hover:scale-95">
      <Link
        href={`/posts/${changeTagsPath(tag)}/`}
        title={convertName(tag)}
        className="hover:border--[#414141] rounded-lg border bg-transparent px-3 py-1.5 text-sm text-[#414141] transition-all duration-300 hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
      >
        {convertName(tag)}
      </Link>
    </li>
  ));
}

function Tags({ tags }: Props): JSX.Element {
  const mostPopularTags = renderTags(tags);

  return <ul className="flex w-full max-w-xs flex-wrap">{mostPopularTags}</ul>;
}

export default Tags;
