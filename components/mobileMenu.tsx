'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { SunIcon, XMarkIcon } from '@heroicons/react/24/solid'

import { IMobileMenuProps } from 'interfaces'
import { usePathname } from 'next/navigation'

const navItems = [
  { title: 'Главная', path: '/' },
  { title: 'Последние', path: '/latest' },
  { title: 'Статьи', path: '/posts' },
  { title: 'Авторизации', path: '/login' },
]

function MobileMenu({ onClose }: IMobileMenuProps): JSX.Element {
  const menuRef = useRef<HTMLDivElement>(null)
  let pathname = usePathname() || '/'

  const handleClickOutside = (event: MouseEvent): void => {
    if (menuRef.current === event.target) {
      onClose()
    }
  }

  const renderLinks = (): JSX.Element[] => {
    return navItems.map((nav) => {
      const isActive = nav.path === pathname

      return (
        <li key={nav.title}>
          <Link
            href={nav.path}
            className={clsx('text-base font-medium mr-2.5 p-2.5', {
              'text-gray-500': isActive,
              'text-black font-bold': !isActive,
            })}
            onClick={onClose}
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
            title='Закрыть меню'
            aria-label='Закрыть'
          >
            <span className='sr-only'>Закрыть</span>
            <XMarkIcon className='w-10 h-10' />
          </button>
          <ul className='space-y-6'>{renderLinks()}</ul>
          <div className='flex flex-row mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10'>
            <div className='flex items-center justify-between mr-2 py-1'>
              <div className='relative flex items-center font-bold overflow-hidden'>
                <button
                  type='button'
                  className='p-2 hover:text-white bg-transparent hover:bg-black hover:border-black border rounded-lg shadow-sm transition-all duration-300'
                  aria-label='Смена темы оформления сайта'
                  title='Смена темы оформления сайта'
                >
                  <span className='sr-only'>тёмная/светлая</span>
                  <SunIcon className='w-5 h-5 hover:text-white' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
