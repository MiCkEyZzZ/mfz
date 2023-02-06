function Footer() {
  return (
    <footer className='flex flex-row justify-center items-center w-full px-2 md:px-0 border'>
      <div className='flex flex-col md:flex-row md:justify-between w-full max-w-6xl h-96 md:h-60 py-8'>
        <div className='flex flex-col md:justify-between items-center md:items-start w-full md:max-w-xs h-16 md:h-40 mb-8 md:mb-0'>
          <div className='w-40 h-16 border'></div>
          <div className='hidden md:block w-80 h-6 border'></div>
        </div>
        <div className='flex flex-row justify-around w-full md:max-w-lg md:h-auto'>
          <div className='w-52 h-44 ml-0 md:ml-24 border'></div>
          <div className='w-28 h-44 ml-0 md:ml-24 border'></div>
        </div>
        <div className='block md:hidden w-full h-16 md:h-auto mt-6 md:mt-0 border'></div>
      </div>
    </footer>
  )
}

export default Footer
