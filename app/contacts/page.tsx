function ContactsPage() {
  return (
    <section className='flex flex-col w-full max-w-6xl'>
      <div className='flex flex-col w-full items-start pt-16'>
        <h2 className='text-base uppercase mb-9'>Контакты</h2>
        <ul className='w-full flex flex-col'>
          <li className='flex flex-row items-center w-full py-5'>
            <p className='font-semibold mr-5'>Адрес эл.почты:</p>
            <a href='mailto:i@mfzhuravlev'>i@mfzhuravlev</a>
          </li>
          <li className='flex flex-row items-center w-full py-5'>
            <p className='font-semibold mr-5'>Телеграм:</p>
            <a
              href='https://t.me/Mickey_Zzz'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://t.me/Mickey_Zzz
            </a>
          </li>
          <li className='flex flex-row items-center w-full py-5'>
            <p className='font-semibold mr-5'>Гитхаб:</p>
            <a
              href='https://github.com/MiCkEyZzZ'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://github.com/MiCkEyZzZ
            </a>
          </li>
          <li className='flex flex-row items-center w-full py-5'>
            <p className='font-semibold mr-5'>Гитфлик:</p>
            <a
              href='https://gitflic.ru/user/mickeyzzz'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://gitflic.ru/user/mickeyzzz
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ContactsPage
