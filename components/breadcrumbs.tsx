import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

function Breadcrumbs() {
  return (
    <div className='flex justify-center w-full h-64'>
      <div className='flex flex-col justify-end w-full max-w-6xl pt-12 pb-9'>
        <div>
          <ul className='flex flex-row items-center'>
            <li>
              <Link href='/'>Главная</Link>
            </li>
            <li className='mx-2'>
              <ChevronRightIcon className='w-4 h-4' />
            </li>
            <li>
              <Link href='/'>Посты</Link>
            </li>
            <li className='mx-2'>
              <ChevronRightIcon className='w-4 h-4' />
            </li>
            <li>
              <Link href='/'>Философия</Link>
            </li>
          </ul>
        </div>
        <h1 className='text-4xl mt-2'>Заголовок поста</h1>
      </div>
    </div>
  )
}

export default Breadcrumbs
