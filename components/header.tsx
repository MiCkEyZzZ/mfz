'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Bars2Icon } from '@heroicons/react/24/outline'
import { SunIcon } from '@heroicons/react/24/solid'
import { RssIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

const navItems = [
  { title: 'Главная', path: '/' },
  { title: 'Последние', path: '/latest' },
  { title: 'Статьи', path: '/posts' },
]

function Header(): JSX.Element {
  const [menu, setMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  let pathname = usePathname() || '/'
  const isSticky =
    pathname.includes('/posts') ||
    pathname.includes('/latest') ||
    pathname.includes('/terms') ||
    pathname.includes('/privacy')

  if (pathname.includes('/posts')) {
    pathname = '/posts'
  }

  const onClose = () => {
    setMenu(false)
    document.body.style.overflow = 'visible'
  }

  const handleOpenMenu = (): void => {
    setMenu(true)
    document.body.style.overflow = 'hidden'
  }

  const handleClickOutside = (event: MouseEvent): void => {
    if (menuRef.current === event.target) {
      onClose()
    }
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

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

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

            {menu && (
              <div id='headlessui-portal-root'>
                <div className='fixed inset-0 md:hidden z-50'>
                  <div
                    ref={menuRef}
                    className='fixed inset-0 -black/20 backdrop-blur-sm dark:bg-back-350'
                    id='headlessui-dialog-overlay-9'
                    aria-hidden='true'
                  ></div>
                  <div className='fixed top-4 right-3 w-full max-w-sm text-base font-bold p-6 text-slate-900 dark:text-slate-400 bg-white dark:bg-back-300 dark:highlight-white/5 rounded-lg shadow-lg'>
                    <button
                      type='button'
                      className='absolute top-5 right-5 w-8 h-8 flex justify-center items-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
                      onClick={() => onClose()}
                      title=''
                      aria-label=''
                    >
                      <span className='sr-only'>Закрыть</span>
                      <XMarkIcon className='w-5 h-5' />
                    </button>
                    <ul className='space-y-6'>
                      <li>
                        <Link
                          href='/docs/introduction'
                          className='hover:text-primary dark:hover:text-sky-400'
                          title=''
                        >
                          Главная
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/about/about-us'
                          className='hover:text-primary dark:hover:text-sky-400'
                          title=''
                        >
                          Последние
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/support/support-us'
                          className='hover:text-primary dark:hover:text-sky-400'
                          title=''
                        >
                          Статьи
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='https://github.com/MiCkEyZzZ/ninja-turtles-api'
                          className='hover:text-primary dark:hover:text-sky-400'
                          title=''
                        >
                          Авторизации
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='https://github.com/MiCkEyZzZ/ninja-turtles-api'
                          className='hover:text-primary dark:hover:text-sky-400'
                          title=''
                        >
                          GitHub
                        </Link>
                      </li>
                    </ul>
                    <div className='flex flex-row mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10'>
                      <div className='flex items-center justify-between mr-2 py-1'>
                        <div className='relative flex items-center font-bold p-2 ring-1 ring-slate-900/10 hover:ring-lime-300 text-slate-700 dark:text-slate-200 dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 hover:bg-primary dark:hover:bg-sky-400 rounded-lg shadow-sm'>
                          <button
                            type='button'
                            className='bg-transparent border-0'
                            aria-label='Смена темы оформления сайта'
                            title='Смена темы оформления сайта'
                          >
                            <span className='sr-only'>dark/light</span>
                            <SunIcon className='w-5 h-5' />
                          </button>
                        </div>
                      </div>

                      <div className='flex items-center justify-between py-1'>
                        <div className='relative flex items-center ring-1 ring-slate-900/10 hover:ring-lime-300 font-bold p-2 text-slate-700 dark:text-slate-200 dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 hover:bg-primary dark:hover:bg-sky-400 rounded-lg shadow-sm'>
                          <Link href='/rss.xml'>
                            <span className='sr-only'>ОСС</span>
                            <RssIcon className='w-5 h-5' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header
