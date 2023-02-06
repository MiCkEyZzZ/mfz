import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

function Breadcrumbs(): JSX.Element {
  return (
    <div className='flex justify-center w-full px-2 md:px-0'>
      <div className='flex flex-col justify-end w-full h-64 max-w-6xl pt-12 pb-9'>
        <div>
          <ul className='flex flex-row items-center'>
            <li>
              <Link href='/' className='text-sm md:text-base'>
                Главная страница
              </Link>
            </li>
            <li className='mx-2'>
              <ChevronRightIcon className='w-4 h-4' />
            </li>
            <li>
              <Link href='/posts' className='text-sm md:text-base'>
                Посты
              </Link>
            </li>
            <li className='mx-2'>
              <ChevronRightIcon className='w-4 h-4' />
            </li>
            <li>
              <Link href='/philosophy' className='text-sm md:text-base'>
                Философия
              </Link>
            </li>
          </ul>
        </div>
        <h1 className='text-xl md:text-4xl mt-5'>Заголовок поста</h1>
      </div>
    </div>
  )
}

export default Breadcrumbs
