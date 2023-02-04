function Header() {
  return (
    <div className='flex flex-col items-center w-full h-96 px-2 md:px-0 border'>
      <div className='hidden md:block w-full h-12'></div>
      <div className='sticky top-0 flex flex-row justify-center w-full'>
        <header className='flex flex-row justify-between w-full max-w-6xl'>
          <div className='w-full max-w-4xl h-16 border'></div>
          <div className='w-40 h-16 border'></div>
        </header>
      </div>
    </div>
  )
}

export default Header
