function Post() {
  return (
    <section className='w-full'>
      <div className='flex flex-row-reverse justify-center items-start'>
        <aside className='hidden md:flex w-full max-w-xs h-96 ml-auto border'></aside>
        <article className='w-full md:max-w-2xl h-screen border'></article>
      </div>
    </section>
  )
}

export default Post
