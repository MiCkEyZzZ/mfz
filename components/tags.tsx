import { capitalize } from 'lib/helper'
import Link from 'next/link'

type Props = {
  tags: string[]
}

function renderTags(tags: string[]): JSX.Element[] {
  return tags.map((tag: string) => (
    <li
      key={tag}
      className='flex flex-col mt-2 mr-2 overflow-hidden hover:scale-95 transform-gpu'
    >
      <Link
        href={tag}
        className='text-sm px-3 py-1.5 text-black hover:text-white bg-transparent hover:bg-black border hover:border-black rounded-lg  transition-all duration-300'
      >
        {capitalize(tag)}
      </Link>
    </li>
  ))
}

function Tags({ tags }: Props): JSX.Element {
  const mostPopularTags = renderTags(tags)
  console.log(mostPopularTags)

  return <ul className='flex flex-wrap w-full max-w-xs'>{mostPopularTags}</ul>
}

export default Tags
