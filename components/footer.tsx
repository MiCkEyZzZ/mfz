import Link from 'next/link'

function Footer(): JSX.Element {
  return (
    <footer className='flex flex-row justify-center items-center w-full px-5 md:px-5 border-t'>
      <div className='flex flex-col md:flex-row md:justify-between w-full max-w-6xl h-96 md:h-60 py-8'>
        <div className='flex flex-col md:justify-between items-center md:items-start w-full md:max-w-xs h-16 md:h-40 mb-8 md:mb-0'>
          <div className='w-40 h-16'>
            <Link href='#' className='text-lg'>
              <span>Михаил Журавлёв</span>
            </Link>
          </div>
          <div className='hidden md:block w-80 h-6'>
            <span className='text-sm'>
              2023 Михаил Журавлёв. Все права защищены.
            </span>
          </div>
        </div>
        <div className='flex flex-row justify-around w-full md:max-w-lg md:h-auto'>
          <div className='h-44 ml-0 md:ml-24'>
            <h3 className='text-sm text-gray-500'>Разделы</h3>
            <ul className='grid grid-rows-4 grid-flow-col gap-1.5 pt-3'>
              <li>
                <Link href='#' className='text-sm'>
                  Философия
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm'>
                  Rust
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm'>
                  Ruby
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm'>
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm'>
                  Next
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm'>
                  React
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm'>
                  Религия
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm'>
                  Законы
                </Link>
              </li>
            </ul>
          </div>
          <div className='h-44 ml-0 md:ml-24'>
            <h3 className='text-sm text-gray-500'>Ссылки</h3>
            <ul className='grid grid-rows-4 grid-flow-col gap-1.5 pt-3'>
              <li>
                <Link href='#' className='text-sm'>
                  Телеграм
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm'>
                  Контакты
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm'>
                  Правила использования
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm'>
                  Конфиденциальность
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex md:hidden justify-center items-center w-full h-16 md:h-auto mt-6 md:mt-0'>
          <span className='text-xs'>
            2023 Михаил Журавлёв. Все права защищены.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
