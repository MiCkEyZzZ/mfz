'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import {
  Bars2Icon,
  SunIcon,
  RssIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'

import { MobileMenu } from 'components'

const navItems = [
  { title: 'Главная', path: '/' },
  { title: 'Последние', path: '/latest' },
  { title: 'Статьи', path: '/posts' },
]

function Header(): JSX.Element {
  const [menu, setMenu] = useState(false)
  let pathname = usePathname() || '/'
  const isSticky =
    pathname.includes('/posts') ||
    pathname.includes('/latest') ||
    pathname.includes('/terms') ||
    pathname.includes('/privacy')

  if (pathname.includes('/posts')) {
    pathname = '/posts'
  }

  function renderNavigate() {
    return navItems.map((nav) => {
      const isActive = nav.path === pathname

      return (
        <li key={nav.path}>
          <Link
            href={nav.path}
            className={clsx('text-base font-medium mr-2.5 p-2.5', {
              'text-gray-500': isActive,
              'text-black font-bold': !isActive,
            })}
          >
            {nav.title}
          </Link>
        </li>
      )
    })
  }

  const handleOpenMenu = (): void => {
    setMenu(true)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseMenu = (): void => {
    setMenu(false)
    document.body.style.overflow = 'visible'
  }

  return (
    <div
      className={
        isSticky
          ? 'sticky top-0 flex flex-col items-center w-full h-16 px-5 md:px-5 bg-white border-b z-50'
          : 'relative flex flex-col items-center w-full h-96 px-5 md:px-5 bg-white border-b z-50'
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
          <div className='flex flex-row items-center w-full max-w-4xl h-16'>
            <Link href='/' className='mr-8'>
              Михаил Журавлёв
            </Link>
            <nav className='hidden md:block text-black'>
              <ul className='flex flex-row'>{renderNavigate()}</ul>
            </nav>
          </div>
          <div className='hidden md:flex items-center'>
            <ul className='flex flex-row'>
              <li className='flex items-center'>
                <Link
                  href='/login'
                  aria-label='Ссылка на авторизацию на сайте'
                  className='px-3 py-2'
                >
                  <UserCircleIcon
                    className='w-5 h-5 hover:opacity-70'
                    title='Авторизации'
                  />
                </Link>
              </li>
              <li className='flex items-center'>
                <button
                  type='button'
                  aria-label='Переключение темы сайта'
                  className='px-3 py-2'
                >
                  <SunIcon
                    className='w-5 h-5 hover:opacity-70'
                    title='Смена темы'
                  />
                </button>
              </li>
              <li className='flex items-center'>
                <Link
                  href='/'
                  aria-label='Ссылка на обогащённую сводку сайта'
                  className='px-3 py-2'
                >
                  <RssIcon className='w-5 h-5 hover:opacity-70' title='ОСС' />
                </Link>
              </li>
            </ul>
          </div>
          <div className='relative block md:hidden w-10 h-10'>
            <button
              type='button'
              className='w-10 h-10'
              onClick={handleOpenMenu}
              aria-label='Меню'
            >
              <span className='sr-only'>Меню</span>
              <Bars2Icon />
            </button>
            {menu && <MobileMenu onClose={handleCloseMenu} />}
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header
