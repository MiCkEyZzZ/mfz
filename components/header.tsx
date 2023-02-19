'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Bars2Icon } from '@heroicons/react/24/outline'
import { SunIcon } from '@heroicons/react/24/solid'
import { RssIcon } from '@heroicons/react/24/solid'

function Header(): JSX.Element {
  const router = usePathname()
  const isSticky = router.includes('/post')

  return (
    <div
      className={
        isSticky
          ? 'sticky top-0 flex flex-col items-center w-full h-16 px-5 md:px-5 bg-white border-b'
          : 'relative flex flex-col items-center w-full h-96 px-5 md:px-5 bg-white border-b'
      }
    >
      <div
        className={isSticky ? 'hidden' : 'hidden md:block w-full h-12'}
      ></div>
      <div
        className={
          isSticky
            ? 'flex flex-row justify-center w-full'
            : 'sticky top-0 flex flex-row justify-center w-full'
        }
      >
        <header className='flex flex-row justify-between items-center w-full max-w-6xl'>
          <div className='flex flex-row items-center w-full max-w-4xl h-14 md:h-16'>
            <Link href='/' className='mr-8'>
              Михаил Журавлёв
            </Link>
            <nav className='hidden md:block text-black'>
              <ul className='flex flex-row'>
                <li>
                  <Link href='/' className='text-base font-medium mr-2.5 p-2.5'>
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    href='/post'
                    className='text-base font-medium mr-2.5 p-2.5'
                  >
                    Посты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='hidden md:flex items-center'>
            <ul className='flex flex-row'>
              <li className='flex items-center'>
                <button
                  aria-label='Переключение темы сайта'
                  className='px-3 py-2'
                >
                  <SunIcon className='w-5 h-5' title='Смена темы' />
                </button>
              </li>
              <li className='flex items-center'>
                <Link
                  href='/'
                  aria-label='Ссылка на обогащённую сводку сайта'
                  className='px-3 py-2'
                >
                  <RssIcon className='w-5 h-5' title='ОСС' />
                </Link>
              </li>
            </ul>
          </div>
          <div className='block md:hidden w-10 h-10'>
            <button className='w-10 h-10' aria-label='Меню'>
              <span className='hidden'>Меню</span>
              <Bars2Icon />
            </button>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header
