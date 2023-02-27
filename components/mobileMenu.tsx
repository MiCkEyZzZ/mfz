'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { SunIcon, XMarkIcon } from '@heroicons/react/24/solid';

import siteConfig from 'config/siteConfig';
import { IMobileMenuProps } from 'interfaces';
import { usePathname } from 'next/navigation';

function MobileMenu({ onClose, onToggle }: IMobileMenuProps): JSX.Element {
  const { mobilNavigate } = siteConfig;
  const menuRef = useRef<HTMLDivElement>(null);
  let pathname = usePathname() || '/';

  const handleClickOutside = (event: MouseEvent): void => {
    if (menuRef.current === event.target) {
      onClose();
    }
  };

  const renderLinks = (): JSX.Element[] => {
    return mobilNavigate.map((nav) => {
      const isActive = nav.path === pathname;

      return (
        <li key={nav.title}>
          <Link
            href={nav.path}
            className={clsx('mr-2.5 p-2.5 text-base font-medium', {
              'text-gray-500': isActive,
              'font-bold text-black': !isActive,
            })}
            onClick={onClose}
          >
            {nav.title}
          </Link>
        </li>
      );
    });
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div id="headlessui-portal-root">
      <div className="fixed inset-0 z-50 md:hidden">
        <div
          ref={menuRef}
          className="-black/20 dark:bg-back-350 fixed inset-0 backdrop-blur-sm"
          id="headlessui-dialog-overlay-9"
          aria-hidden="true"
        ></div>
        <div className="dark:bg-back-300 dark:highlight-white/5 fixed top-4 right-3 w-full max-w-sm rounded-lg bg-white p-6 text-base font-bold text-slate-900 shadow-lg dark:text-slate-400">
          <button
            type="button"
            className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            onClick={() => onClose()}
            title="Закрыть меню"
            aria-label="Закрыть"
          >
            <span className="sr-only">Закрыть</span>
            <XMarkIcon className="h-10 w-10" />
          </button>
          <ul className="space-y-6">{renderLinks()}</ul>
          <div className="mt-6 flex flex-row border-t border-slate-200 pt-6 dark:border-slate-200/10">
            <div className="mr-2 flex items-center justify-between py-1">
              <div className="relative flex items-center overflow-hidden font-bold">
                <button
                  type="button"
                  className="rounded-lg border bg-transparent p-2 shadow-sm transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                  aria-label="Смена темы оформления сайта"
                  title="Смена темы оформления сайта"
                  onClick={onToggle}
                >
                  <span className="sr-only">тёмная/светлая</span>
                  <SunIcon className="h-5 w-5 hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
