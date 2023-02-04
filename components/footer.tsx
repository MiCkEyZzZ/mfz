function Footer() {
  return (
    <footer className='flex flex-row justify-center items-center w-full px-2 md:px-0 border'>
      <div className='flex flex-col md:flex-row md:justify-between w-full max-w-6xl h-96 md:h-60 py-8'>
        <div className='w-full md:max-w-xs h-16 md:h-40 mb-8 md:mb-0 border'></div>
        <div className='w-full md:max-w-lg h-40 md:h-auto border'></div>
        <div className='block md:hidden w-full h-16 md:h-auto mt-6 md:mt-0 border'></div>
      </div>
    </footer>
  )
}

export default Footer
