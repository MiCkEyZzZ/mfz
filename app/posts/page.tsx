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
          <li className='w-full h-80 p-8 border rounded-lg'>
            <article>
              <Link href='/philosophy/1' className='flex flex-col w-full'>
                <h3 className='text-xl font-semibold'>
                  Открытость. Человек и животное
                </h3>
                <p className='text-base mt-4'>
                  В течение зимнего семестра 1929–1930 годов Мартин Хайдеггер
                  читает курс в университете Фрайбурга, который он озаглавил
                  «Die Grundbegriffe der Metaphysik. Welt – Endlichkeit –
                  Einsamkeit».
                </p>
                <div className='text-base font-semibold mt-4'>Подробнее</div>
              </Link>
            </article>
          </li>
          <li className='w-full h-80 p-8 border rounded-lg'>
            <article>
              <Link href='/philosophy/1' className='flex flex-col w-full'>
                <h3 className='text-xl font-semibold'>
                  Философские начала цельного знания
                </h3>
                <p className='text-base mt-4'>
                  Первый вопрос, на который должна ответить всякая философия,
                  имеющая притязание на общий интерес, есть вопрос о цели
                  существования.
                </p>
                <div className='text-base font-semibold mt-4'>Подробнее</div>
              </Link>
            </article>
          </li>
          <li className='w-full h-80 p-8 border rounded-lg'>
            <article>
              <Link href='/philosophy/1' className='flex flex-col w-full'>
                <h3 className='text-xl font-semibold'>
                  Людвиг Фейербах и конец классической немецкой философии.
                </h3>
                <p className='text-base mt-4'>
                  Высший вопрос всей философии, вопрос об отношении мышления к
                  бытию, духа к природе, имеет свои корни, стало быть, не в
                  меньшей степени, чем всякая религия, в ограниченных и
                  невежественных представлениях людей периода дикости […].
                </p>
                <div className='text-base font-semibold mt-4'>Подробнее</div>
              </Link>
            </article>
          </li>
          <li className='w-full h-80 p-8 border rounded-lg'>
            <article>
              <Link href='/philosophy/1' className='flex flex-col w-full'>
                <h3 className='text-xl font-semibold'>Что такое философия?</h3>
                <p className='text-base mt-4'>
                  Я объявил академический и, стало быть, строго научный курс под
                  названием «Что такое философия?» […] Я задумал […] взять саму
                  философскую деятельность, само философствование и подвергнуть
                  их глубокому анализу. […]. Конечно, я должен честно стараться,
                  чтобы мои слова были понятны всем вам, даже не получившим
                  предварительной подготовки.
                </p>
                <div className='text-base font-semibold mt-4'>Подробнее</div>
              </Link>
            </article>
          </li>
          <li className='w-full h-80 p-8 border rounded-lg'>
            <article>
              <Link href='/philosophy/1' className='flex flex-col w-full'>
                <h3 className='text-xl font-semibold'>
                  Г.-Г. Гадамер. История понятий как философия.
                </h3>
                <p className='text-base mt-4'>
                  В […] формулировке нашей темы заложено суждение о том, что
                  такое философия, а именно: ее понятийность составляет ее суть
                  – в отличие от чисто функциональной роли понятий в
                  высказываниях позитивных наук. Если последние всегда измеряют
                  значимость своих понятий мерой приращения познания, которую
                  легко проконтролировать, то философия явно не имеет в этом
                  смысле никакого предмета.
                </p>
                <div className='text-base font-semibold mt-4'>Подробнее</div>
              </Link>
            </article>
          </li>
          <li className='w-full h-80 p-8 border rounded-lg'>
            <article>
              <Link href='/philosophy/1' className='flex flex-col w-full'>
                <h3 className='text-xl font-semibold'>Платон. Государство.</h3>
                <p className='text-base mt-4'>
                  — Нужно ли напоминать тебе, или ты помнишь сам, что коль
                  скоро, на наш взгляд, человек что-нибудь любит, он должен,
                  если только верно о нем говорят, выказывать любовь не к одной
                  какой-нибудь стороне того, что он любит, оставаясь безучастным
                  к другой, но, напротив, ему должно быть дорого все.
                </p>
                <div className='text-base font-semibold mt-4'>Подробнее</div>
              </Link>
            </article>
          </li>
          <li className='w-full h-80 p-8 border rounded-lg'>
            <article>
              <Link href='/philosophy/1' className='flex flex-col w-full'>
                <h3 className='text-xl font-semibold'>
                  Г.В.Ф. Гегель. Кто мыслит абстрактно?
                </h3>
                <p className='text-base mt-4'>
                  Мыслить? Абстрактно? Sauve qui peut! – «Спасайся, кто может!»
                  – наверняка завопит тут какой-нибудь наемный осведомитель,
                  предостерегая публику от чтения статьи, в которой речь пойдет
                  про «метафизику». Ведь «метафизика» – как и «абстрактное» (да,
                  пожалуй, как и «мышление») – слово, которое в каждом вызывает
                  более или менее сильное желание удрать подальше, как от чумы.
                </p>
                <div className='text-base font-semibold mt-4'>Подробнее</div>
              </Link>
            </article>
          </li>
          <li className='w-full h-80 p-8 border rounded-lg'>
            <article>
              <Link href='/philosophy/1' className='flex flex-col w-full'>
                <h3 className='text-xl font-semibold'>
                  Хайдеггер М. Парменид.
                </h3>
                <p className='text-base mt-4'>
                  Уже у Платона и особенно у Аристотеля в греческом понимании
                  сущности λήθεια совершается перемена, к которой в определенном
                  ἀ отношении принуждает сама λήθεια. Издавна ληθές представляет
                  собой ἀ ἀ несокрытое и раскрывающее. Несокрытое как таковое
                  может раскрываться для человека и через человека только тогда,
                  когда раскрывающее отношение держится несокрытого и
                  сообразуется с ним.
                </p>
                <div className='text-base font-semibold mt-4'>Подробнее</div>
              </Link>
            </article>
          </li>
          <li className='w-full h-80 p-8 border rounded-lg'>
            <article>
              <Link href='/philosophy/1' className='flex flex-col w-full'>
                <h3 className='text-xl font-semibold'>
                  Фр. Бэкон. Новый органон.
                </h3>
                <p className='text-base mt-4'>
                  Идолы и ложные понятия, которые уже пленили человеческий разум
                  и глубоко в нем укрепились, так владеют умом людей, что
                  затрудняют вход истине, но, если даже вход ей будет дозволен и
                  предоставлен, они снова преградят путь при самом обновлении
                  наук и будут ему препятствовать, если только люди,
                  предостереженные, не вооружатся против них, насколько
                  возможно.
                </p>
                <div className='text-base font-semibold mt-4'>Подробнее</div>
              </Link>
            </article>
          </li>
          <li className='w-full h-80 p-8 border rounded-lg'>
            <article>
              <Link href='/philosophy/1' className='flex flex-col w-full'>
                <h3 className='text-xl font-semibold'>
                  Фрэнсис Бэкон. О достоинстве и приумножении наук.
                </h3>
                <p className='text-base mt-4'>
                  Они обманывают не в частных вопросах, как остальные
                  заблуждения, затемняющие разум и расставляющие ему ловушки; их
                  обман является результатом неправильного и искаженного
                  предрасположения ума, которое заражает и извращает все
                  восприятия интеллекта.
                </p>
                <div className='text-base font-semibold mt-4'>Подробнее</div>
              </Link>
            </article>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default PostsPage
1
