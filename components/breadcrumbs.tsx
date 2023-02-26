import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Balancer from 'react-wrap-balancer';

import { IBreadcrumbsProps } from 'interfaces';
import { convertName } from 'lib/helper';

function Breadcrumbs({ title, tag }: IBreadcrumbsProps): JSX.Element {
  const label = convertName(tag);

  return (
    <div className="flex w-full justify-center px-2 md:px-0">
      <div className="flex h-64 w-full max-w-6xl flex-col justify-end pt-12 pb-9">
        <div>
          <ul className="flex flex-row items-center">
            <li>
              <Link
                href="/"
                className="text-sm text-[#414141] dark:text-white md:text-base"
                title="Главная страница"
              >
                Главная
              </Link>
            </li>
            <li className="mx-2">
              <ChevronRightIcon className="h-3.5 w-3.5 text-[#414141] dark:text-white" />
            </li>
            <li>
              <Link
                href="/posts"
                className="text-sm text-[#414141] dark:text-white md:text-base"
                title="Страница с постами"
              >
                Посты
              </Link>
            </li>
            <li className="mx-2">
              <ChevronRightIcon className="h-3.5 w-3.5 text-[#414141] dark:text-white" />
            </li>
            <li>
              <p className="cursor-text text-sm text-gray-700 md:text-base" title="Страница поста">
                {label}
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full lg:max-w-2xlx">
          <h1 className="mt-5 text-xl text-[#414141] dark:text-white sm:text-2xl md:text-4xl">
            <Balancer>{title}</Balancer>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;
