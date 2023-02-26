'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { Bars2Icon, SunIcon, RssIcon, UserCircleIcon, MoonIcon } from '@heroicons/react/24/solid';

import siteConfig from '../config/siteConfig';
import { MobileMenu } from 'components';
import { useTheme } from 'lib/theme';
import color from '../app/default-colors';

function Header(): JSX.Element {
  const { isDarkMode, toggleTheme } = useTheme();
  const [menu, setMenu] = useState(false);
  const { navigationLinks, title } = siteConfig;
  const { brand } = color;
  let pathname = usePathname() || '/';
  const isSticky =
    pathname.includes('/posts') ||
    pathname.includes('/latest') ||
    pathname.includes('/terms') ||
    pathname.includes('/privacy');

  if (pathname.includes('/posts')) {
    pathname = '/posts';
  }

  function renderNavigate(): JSX.Element[] {
    return navigationLinks.map((nav) => {
      const isActive = nav.path === pathname;

      return (
        <li key={nav.path}>
          <Link
            href={nav.path}
            className={clsx('mr-2.5 p-2.5 text-base font-medium', {
              'font-bold text-gray-500': !isActive,
              'cursor-default text-[#414141] dark:text-white': isActive,
            })}
          >
            {nav.title}
          </Link>
        </li>
      );
    });
  }

  const handleOpenMenu = (): void => {
    setMenu(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseMenu = (): void => {
    setMenu(false);
    document.body.style.overflow = 'visible';
  };

  const toggleDarkMode = () => {
    localStorage.setItem('theme', (!isDarkMode).toString());
    toggleTheme();

    const key = localStorage.getItem('theme');
    document.documentElement.className = key === 'true' ? 'dark' : '';
  };

  return (
    <div
      className={
        isSticky
          ? 'sticky top-0 z-50 flex h-16 w-full flex-col items-center border-b bg-white px-5 dark:bg-black md:px-5'
          : 'relative z-50 flex h-96 w-full flex-col items-center border-b bg-white px-5 dark:bg-black md:px-5'
      }
    >
      <div className={isSticky ? 'hidden' : 'hidden h-12 w-full md:block'}></div>
      <div
        className={
          isSticky
            ? 'flex w-full flex-row justify-center'
            : 'sticky top-0 flex w-full flex-row justify-center'
        }
      >
        <header className="flex w-full max-w-6xl flex-row items-center justify-between">
          <div className="flex h-16 w-full max-w-4xl flex-row items-center">
            <Link href="/" className="mr-8 text-black dark:text-white">
              {title}
            </Link>
            <nav className="hidden text-black md:block">
              <ul className="flex flex-row">{renderNavigate()}</ul>
            </nav>
          </div>
          <div className="hidden items-center md:flex">
            <ul className="flex flex-row">
              <li className="flex items-center">
                <Link
                  href="/login"
                  aria-label="Ссылка на авторизацию на сайте"
                  className="px-3 py-2"
                >
                  <UserCircleIcon
                    className="h-5 w-5 text-black hover:opacity-70 dark:text-white"
                    title="Авторизации"
                  />
                </Link>
              </li>
              <li className="flex items-center">
                <button
                  type="button"
                  aria-pressed={!isDarkMode ? false : true}
                  aria-label="Переключение темы сайта"
                  title="Смена темы"
                  className="px-3 py-2"
                  onClick={() => toggleDarkMode()}
                >
                  {isDarkMode ? (
                    <MoonIcon className="h-5 w-5 text-black hover:opacity-70 dark:text-white" />
                  ) : (
                    <SunIcon className="h-5 w-5 hover:opacity-70" />
                  )}
                </button>
              </li>
              <li className="flex items-center">
                <Link
                  href="/"
                  aria-label="Ссылка на обогащённую сводку сайта"
                  className="px-3 py-2"
                >
                  <RssIcon
                    className="h-5 w-5 text-black hover:opacity-70 dark:text-white"
                    title="ОСС"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative block h-10 w-10 md:hidden">
            <button type="button" className="h-10 w-10" onClick={handleOpenMenu} aria-label="Меню">
              <span className="sr-only">Меню</span>
              <Bars2Icon className="text-black dark:text-white" />
            </button>
            {menu && <MobileMenu onClose={handleCloseMenu} />}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
