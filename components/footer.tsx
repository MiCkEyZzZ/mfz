'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import siteConfig from '../config/siteConfig';

interface ILink {
  name: string;
  path: string;
}

function Footer(): JSX.Element {
  let pathname = usePathname() || '/';
  const { footerLinks, title } = siteConfig;

  function renderCategories(): JSX.Element[] {
    return footerLinks.map((link: ILink) => {
      return (
        <li key={link.name}>
          <Link
            key={link.name}
            href={link.path}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-white dark:hover:underline"
          >
            {link.name}
          </Link>
        </li>
      );
    });
  }

  return (
    <footer className="flex w-full flex-row items-center justify-center border-t bg-white px-5 dark:border-t-transparent dark:bg-gray-700 md:px-5">
      <div className="flex h-96 w-full max-w-6xl flex-col py-8 md:h-60 md:flex-row md:justify-between">
        <div className="mb-8 flex h-16 w-full flex-col items-center md:mb-0 md:h-40 md:max-w-xs md:items-start md:justify-between">
          <div className="h-16 w-40">
            <Link href="/" className="text-lg text-[#414141] dark:text-white">
              <span>{title}</span>
            </Link>
          </div>
          <div className="hidden h-6 w-80 md:block">
            <span className="text-sm text-[#414141] dark:text-white">
              2023 Михаил Журавлёв. Все права защищены.
            </span>
          </div>
        </div>
        <div className="flex w-full flex-row justify-around md:h-auto md:max-w-lg">
          <div className="ml-0 h-44 md:ml-24">
            <h3 className="text-base font-bold text-[#414141] dark:text-white">Категории</h3>
            <ul className="grid grid-flow-col grid-rows-4 gap-1.5 pt-3">{renderCategories()}</ul>
          </div>
          <div className="ml-0 h-44 md:ml-24">
            <h3 className="text-base font-bold text-[#414141] dark:text-white">Ссылки</h3>
            <ul className="grid grid-flow-col grid-rows-4 gap-1.5 pt-3">
              <li>
                <Link
                  href="https://t.me/Mickey_Zzz"
                  target="_blank"
                  className="text-sm text-gray-500 hover:text-gray-700 dark:text-white dark:hover:underline"
                >
                  Телеграм
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-sm text-gray-500 hover:text-gray-700 dark:text-white dark:hover:underline"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className={clsx('text-sm hover:text-gray-700', {
                    'font-bold text-black dark:text-cyan-600': pathname === '/terms',
                    'text-gray-500 dark:text-white dark:hover:underline': pathname !== '/terms',
                  })}
                >
                  Правила использования
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className={clsx('text-sm hover:text-gray-700', {
                    'font-bold text-black dark:text-cyan-600': pathname === '/privacy',
                    'text-gray-500 dark:text-white dark:hover:underline': pathname !== '/privacy',
                  })}
                >
                  Конфиденциальность
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex h-16 w-full items-center justify-center md:mt-0 md:hidden md:h-auto">
          <span className="text-xs text-black dark:text-white">
            2023 Михаил Журавлёв. Все права защищены.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
