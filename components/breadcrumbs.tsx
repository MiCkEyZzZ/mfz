import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Balancer from 'react-wrap-balancer'

import { IBreadcrumbsProps } from 'interfaces'
import { convertName } from 'lib/helper'

function Breadcrumbs({ title, tag }: IBreadcrumbsProps): JSX.Element {
  const label = convertName(tag)

  return (
    <div className='flex justify-center w-full px-2 md:px-0'>
      <div className='flex flex-col justify-end w-full h-64 max-w-6xl pt-12 pb-9'>
        <div>
          <ul className='flex flex-row items-center'>
            <li>
              <Link
                href='/'
                className='text-sm md:text-base'
                title='Главная страница'
              >
                Главная
              </Link>
            </li>
            <li className='mx-2'>
              <ChevronRightIcon className='w-3.5 h-3.5' />
            </li>
            <li>
              <Link
                href='/posts'
                className='text-sm md:text-base'
                title='Страница с постами'
              >
                Посты
              </Link>
            </li>
            <li className='mx-2'>
              <ChevronRightIcon className='w-3.5 h-3.5' />
            </li>
            <li>
              <p
                className='text-sm md:text-base text-gray-700 cursor-text'
                title='Страница поста'
              >
                {label}
              </p>
            </li>
          </ul>
        </div>
        <div className='w-full lg:max-w-2xlx'>
          <h1 className='text-xl sm:text-2xl md:text-4xl mt-5'>
            <Balancer>{title}</Balancer>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs
