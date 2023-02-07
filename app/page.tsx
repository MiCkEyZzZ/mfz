import Link from 'next/link'

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

export default function HomePage(): JSX.Element {
  return (
    <section className='flex flex-col w-full max-w-6xl'>
      <div className='grid grid-flow-row-1 md:grid-flow-row-3 md:grid-flow-col md:gap-x-24 gap-y-12 md:gap-y-16 w-full items-start pt-16'>
        <div className='w-full col-span-2 row-span-3'>
          <h2 className='text-base uppercase mb-9'>Недавно опубликовано</h2>
          <ul className='flex flex-col w-full max-w-1xl'>
            <li className='w-full'>
              <article className='text-black'>
                <Link href='/posts/1' className='flex flex-col'>
                  <h3 className='text-md font-bold'>Пролог ВИДЕТЬ</h3>
                  <p className='w-full mt-4'>
                    В этой работе выражено стремление увидеть и показать то, чем
                    становится и чего требует человек, если его целиком и
                    полностью рассматривать в рамках явлений. Зачем стремиться
                    увидеть? И почему специально направлять взор на человека?
                  </p>
                  <div className='flex flex-row items-center w-full h-7 mt-4'>
                    <span className='text-base font-semibold'>
                      Читать дальше
                    </span>
                  </div>
                </Link>
              </article>
            </li>
            <li className='w-full mt-12'>
              <article className='text-black'>
                <Link href='#' className='flex flex-col'>
                  <h3 className='text-md font-bold'>
                    Структурная антропология
                  </h3>
                  <p className='w-full mt-4'>
                    Напомним, что главные различия между этими науками
                    заключались в том, что метод, которым пользуется в основном
                    социология, — метод сравнительный, а в истории принят
                    монографический и функциональный метод. Оба автора,
                    единодушно признавая подобное противопоставление, расходятся
                    лишь в оценке значимости каждого из этих методов
                  </p>
                  <div className='flex flex-row items-center w-full h-7 mt-4'>
                    <span className='text-base font-semibold'>
                      Читать дальше
                    </span>
                  </div>
                </Link>
              </article>
            </li>
            <li className='w-full mt-12'>
              <article className='text-black'>
                <Link href='#' className='flex flex-col'>
                  <h3 className='text-md font-bold'>
                    Открытость. Человек и животное
                  </h3>
                  <p className='w-full mt-4'>
                    В течение зимнего семестра 1929–1930 годов Мартин Хайдеггер
                    читает курс в университете Фрайбурга, который он озаглавил
                    «Die Grundbegriffe der Metaphysik. Welt – Endlichkeit –
                    Einsamkeit»
                  </p>
                  <div className='flex flex-row items-center w-full h-7 mt-4'>
                    <span className='text-base font-semibold'>
                      Читать дальше
                    </span>
                  </div>
                </Link>
              </article>
            </li>
            <li className='w-full mt-12'>
              <article className='text-black'>
                <Link href='#' className='flex flex-col'>
                  <h3 className='text-md font-bold'>
                    Людвиг Фейербах и конец классической немецкой философии.
                  </h3>
                  <p className='w-full mt-4'>
                    Высший вопрос всей философии, вопрос об отношении мышления к
                    бытию, духа к природе, имеет свои корни, стало быть, не в
                    меньшей степени, чем всякая религия, в ограниченных и
                    невежественных представлениях людей периода дикости […].
                  </p>
                  <div className='flex flex-row items-center w-full h-7 mt-4'>
                    <span className='text-base font-semibold'>
                      Читать дальше
                    </span>
                  </div>
                </Link>
              </article>
            </li>
            <li className='w-full mt-12'>
              <article className='text-black'>
                <Link href='#' className='flex flex-col'>
                  <h3 className='text-md font-bold'>
                    Философские начала цельного знания
                  </h3>
                  <p className='w-full mt-4'>
                    Первый вопрос, на который должна ответить всякая философия,
                    имеющая притязание на общий интерес, есть вопрос о цели
                    существования.
                  </p>
                  <div className='flex flex-row items-center w-full h-7 mt-4'>
                    <span className='text-base font-semibold'>
                      Читать дальше
                    </span>
                  </div>
                </Link>
              </article>
            </li>
            <li className='w-full mt-12'>
              <article className='text-black'>
                <Link href='#' className='flex flex-col'>
                  <h3 className='text-md font-bold'>Что такое философия?</h3>
                  <p className='w-full mt-4'>
                    Я объявил академический и, стало быть, строго научный курс
                    под названием «Что такое философия?» […] Я задумал […] взять
                    саму философскую деятельность, само философствование и
                    подвергнуть их глубокому анализу. […]. Конечно, я должен
                    честно стараться, чтобы мои слова были понятны всем вам,
                    даже не получившим предварительной подготовки.
                  </p>
                  <div className='flex flex-row items-center w-full h-7 mt-4'>
                    <span className='text-base font-semibold'>
                      Читать дальше
                    </span>
                  </div>
                </Link>
              </article>
            </li>
            <li className='w-full mt-12'>
              <article className='text-black'>
                <Link href='#' className='flex flex-col'>
                  <h3 className='text-md font-bold'>Платон. Государство.</h3>
                  <p className='w-full mt-4'>
                    — Нужно ли напоминать тебе, или ты помнишь сам, что коль
                    скоро, на наш взгляд, человек что-нибудь любит, он должен,
                    если только верно о нем говорят, выказывать любовь не к
                    одной какой-нибудь стороне того, что он любит, оставаясь
                    безучастным к другой, но, напротив, ему должно быть дорого
                    все.
                  </p>
                  <div className='flex flex-row items-center w-full h-7 mt-4'>
                    <span className='text-base font-semibold'>
                      Читать дальше
                    </span>
                  </div>
                </Link>
              </article>
            </li>
            <li className='w-full mt-12'>
              <article className='text-black'>
                <Link href='#' className='flex flex-col'>
                  <h3 className='text-md font-bold'>
                    Г.В.Ф. Гегель. Кто мыслит абстрактно?
                  </h3>
                  <p className='w-full mt-4'>
                    Мыслить? Абстрактно? Sauve qui peut! – «Спасайся, кто
                    может!» – наверняка завопит тут какой-нибудь наемный
                    осведомитель, предостерегая публику от чтения статьи, в
                    которой речь пойдет про «метафизику». Ведь «метафизика» –
                    как и «абстрактное» (да, пожалуй, как и «мышление») – слово,
                    которое в каждом вызывает более или менее сильное желание
                    удрать подальше, как от чумы.
                  </p>
                  <div className='flex flex-row items-center w-full h-7 mt-4'>
                    <span className='text-base font-semibold'>
                      Читать дальше
                    </span>
                  </div>
                </Link>
              </article>
            </li>
            <li className='w-full mt-12'>
              <article className='text-black'>
                <Link href='#' className='flex flex-col'>
                  <h3 className='text-md font-bold'>Хайдеггер М. Парменид.</h3>
                  <p className='w-full mt-4'>
                    Уже у Платона и особенно у Аристотеля в греческом понимании
                    сущности λήθεια совершается перемена, к которой в
                    определенном ἀ отношении принуждает сама λήθεια. Издавна
                    ληθές представляет собой ἀ ἀ несокрытое и раскрывающее.
                    Несокрытое как таковое может раскрываться для человека и
                    через человека только тогда, когда раскрывающее отношение
                    держится несокрытого и сообразуется с ним.
                  </p>
                  <div className='flex flex-row items-center w-full h-7 mt-4'>
                    <span className='text-base font-semibold'>
                      Читать дальше
                    </span>
                  </div>
                </Link>
              </article>
            </li>
            <li className='w-full mt-12'>
              <article className='text-black'>
                <Link href='#' className='flex flex-col'>
                  <h3 className='text-md font-bold'>
                    Фр. Бэкон. Новый органон.
                  </h3>
                  <p className='w-full mt-4'>
                    Идолы и ложные понятия, которые уже пленили человеческий
                    разум и глубоко в нем укрепились, так владеют умом людей,
                    что затрудняют вход истине, но, если даже вход ей будет
                    дозволен и предоставлен, они снова преградят путь при самом
                    обновлении наук и будут ему препятствовать, если только
                    люди, предостереженные, не вооружатся против них, насколько
                    возможно.
                  </p>
                  <div className='flex flex-row items-center w-full h-7 mt-4'>
                    <span className='text-base font-semibold'>
                      Читать дальше
                    </span>
                  </div>
                </Link>
              </article>
            </li>
            <li className='w-full mt-12'>
              <article className='text-black'>
                <Link href='#' className='flex flex-col'>
                  <h3 className='text-md font-bold'>
                    Фрэнсис Бэкон. О достоинстве и приумножении наук.
                  </h3>
                  <p className='w-full mt-4'>
                    Они обманывают не в частных вопросах, как остальные
                    заблуждения, затемняющие разум и расставляющие ему ловушки;
                    их обман является результатом неправильного и искаженного
                    предрасположения ума, которое заражает и извращает все
                    восприятия интеллекта.
                  </p>
                  <div className='flex flex-row items-center w-full h-7 mt-4'>
                    <span className='text-base font-semibold'>
                      Читать дальше
                    </span>
                  </div>
                </Link>
              </article>
            </li>
          </ul>
        </div>
        <div className='w-full col-span-2 md:col-span-1'>
          <h2 className='text-base uppercase mb-9'>Популярные категории</h2>
          <ul className='flex flex-wrap w-full max-w-xs'>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                Философия
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                Этика
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                Next
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                Rust
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                Animation
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                Node
              </Link>
            </li>
            <li className='flex flex-col mt-2 mr-2 border rounded-2xl'>
              <Link href='#' className='text-xs px-2.5 py-2.5'>
                React
              </Link>
            </li>
          </ul>
        </div>
        <div className='md:sticky w-full row-span-1 md:row-span-1 col-span-2 md:col-span-1'>
          <h2 className='text-base uppercase mb-9'>Популярные посты</h2>
          <ul className='flex flex-wrap w-full max-w-xs h-506 border'></ul>
        </div>
      </div>
    </section>
  )
}
