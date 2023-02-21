function Comments(): JSX.Element {
  return (
    <div className='flex flex-col w-full mt-3 px-0 py-5'>
      <h1 className='font-semibold'>Комментарии</h1>
      <div className='flex flex-col w-full mt-2'>
        <textarea className='w-full h-28 border rounded-md'></textarea>
        <div className='flex flex-col justify-start items-center w-full mt-2'>
          <button
            type='submit'
            className='text-base font-medium mr-0 ml-auto px-4 py-2 text-white bg-black hover:bg-gray-600 border border-transparent rounded-md md:leading-6 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-800'
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Comments
