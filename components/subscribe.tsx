function Subscribe() {
  return (
    <section className='flex flex-col items-center w-full my-24 px-2 md:px-0'>
      <div className='flex flex-col justify-between w-full max-w-6xl'>
        <div className='w-full max-w-xl'>
          <h2 className='text-4xl mb-6'>
            Каждый день выходит, что-то новое - не пропустите интересное.
          </h2>
          <p className='text-2xl'>
            Подпишись на рассылку новостей и будь в курсе о выходе нового
            контента.
          </p>
        </div>
        <div className='w-full mt-16'>
          <form className='flex flex-col md:flex-row items-center w-full max-w-xl'>
            <fieldset className='w-full'>
              <input
                type='text'
                placeholder='вы@домен.ру'
                className='w-full px-3 py-3 md:py-5 border rounded-md'
              />
            </fieldset>
            <div className='mt-5 ml-auto md:ml-5 md:mt-0'>
              <button className='px-5 md:px-7 py-3 md:py-5 border rounded-md'>
                Подписаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
