import Link from 'next/link'

export const metadata = {
  title: 'Посты',
  description:
    'В блоге Я публикую свои мысли о происходящем и просто философствую о бытие',
}

function PostsPage() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center w-full h-20'>
          <h1 className='text-4xl font-semibold'>Философия</h1>
          <p className='text-lg font-normal'>12 статей</p>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <li className='w-full p-8 border rounded-lg'>
            <article>
              <Link href='/philosophy/1' className='flex flex-col w-full'>
                <h3 className='text-xl font-semibold'>Пролог ВИДЕТЬ</h3>
                <p className='text-base mt-4'>
                  В этой работе выражено стремление увидеть и показать то, чем
                  становится и чего требует человек, если его целиком и
                  полностью рассматривать в рамках явлений. Зачем стремиться
                  увидеть? И почему специально направлять взор на человека?
                </p>
                <div className='text-base font-semibold mt-4'>Подробнее</div>
              </Link>
            </article>
          </li>
          <li className='w-full p-8 border rounded-lg'>
            <article>
              <Link href='/philosophy/1' className='flex flex-col w-full'>
                <h3 className='text-xl font-semibold'>
                  Структурная антропология
                </h3>
                <p className='text-base mt-4'>
                  Более полувека прошло с тех пор, как Хаузер и Симиан изложили
                  и противопоставили основные принципы и методы, характерные, с
                  их точки зрения, для истории и социологии. Напомним, что
                  главные различия между этими науками заключались в том, что
                  метод, которым пользуется в основном социология, — метод
                  сравнительный, а в истории принят монографический и
                  функциональный метод.
                </p>
                <div className='text-base font-semibold mt-4'>Подробнее</div>
              </Link>
            </article>
          </li>
          <li className='w-full h-80 p-8 border rounded-lg'></li>
          <li className='w-full h-80 p-8 border rounded-lg'></li>
          <li className='w-full h-80 p-8 border rounded-lg'></li>
          <li className='w-full h-80 p-8 border rounded-lg'></li>
          <li className='w-full h-80 p-8 border rounded-lg'></li>
          <li className='w-full h-80 p-8 border rounded-lg'></li>
          <li className='w-full h-80 p-8 border rounded-lg'></li>
          <li className='w-full h-80 p-8 border rounded-lg'></li>
          <li className='w-full h-80 p-8 border rounded-lg'></li>
          <li className='w-full h-80 p-8 border rounded-lg'></li>
        </ul>
      </div>
    </section>
  )
}

export default PostsPage
1
