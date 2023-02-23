import { PostCard } from 'components'
import { allPosts } from 'contentlayer/generated'

function getPosts(type: string) {
  return allPosts.filter((post) => post.tag === type)
}

function ReactPage() {
  const posts = getPosts('ruby')

  return (
    <section className='flex flex-col w-full max-w-6xl pt-32'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center w-full h-20 pl-5 pr-10'>
          <h1 className='text-4xl font-semibold'>Ruby</h1>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-auto gap-8'>
          {posts.map((post) => (
            <li
              key={post.slug}
              className='w-full p-8 border border-gray-200 rounded-lg'
            >
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ReactPage
