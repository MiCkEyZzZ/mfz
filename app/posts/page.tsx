export const metadata = {
  title: 'Посты',
  description:
    'В блоге Я публикую свои мысли о происходящем и просто философствую о бытие',
}

function PostsPage() {
  return (
    <section className='flex flex-col'>
      <div className='w-full h-20 border'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='w-full h-80 border rounded-lg'></div>
        <div className='w-full h-80 border rounded-lg'></div>
        <div className='w-full h-80 border rounded-lg'></div>
        <div className='w-full h-80 border rounded-lg'></div>
        <div className='w-full h-80 border rounded-lg'></div>
        <div className='w-full h-80 border rounded-lg'></div>
        <div className='w-full h-80 border rounded-lg'></div>
        <div className='w-full h-80 border rounded-lg'></div>
        <div className='w-full h-80 border rounded-lg'></div>
        <div className='w-full h-80 border rounded-lg'></div>
        <div className='w-full h-80 border rounded-lg'></div>
        <div className='w-full h-80 border rounded-lg'></div>
      </div>
    </section>
  )
}

export default PostsPage
