import information from 'lib/information'

export const metadata = {
  description: 'Разработчик, философ',
  openGraph: {
    title: 'Михаил Журавлёв',
    description: 'Разработчик, философ',
    url: 'https://mfz.ru',
    siteName: 'Михаил Журавлёв',
    images: [],
    locale: 'ru-RU',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <section className='grid grid-flow-row-1 md:grid-flow-row-3 md:grid-flow-col md:gap-x-24 gap-y-12 md:gap-y-16 w-full items-start pt-16'>
      <div className='w-full col-span-2 row-span-3'>
        <ul className='flex flex-col w-full'>
          <li className='w-full h-52 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
          <li className='w-full h-52 mt-12 border'></li>
        </ul>
      </div>
      <div className='w-full h-36 col-span-2 md:col-span-1 border'></div>
      <div className='md:sticky w-full h-96 row-span-1 md:row-span-1 col-span-2 md:col-span-1 border'></div>
    </section>
  )
}
