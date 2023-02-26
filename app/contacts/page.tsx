function ContactsPage() {
  return (
    <section className="flex w-full max-w-6xl flex-col">
      <div className="flex w-full flex-col items-start pt-16">
        <h2 className="mb-9 text-base uppercase">Контакты</h2>
        <ul className="flex w-full flex-col">
          <li className="flex w-full flex-row items-center py-5">
            <p className="mr-5 font-semibold">Адрес эл.почты:</p>
            <a href="mailto:i@mfzhuravlev">i@mfzhuravlev</a>
          </li>
          <li className="flex w-full flex-row items-center py-5">
            <p className="mr-5 font-semibold">Телеграм:</p>
            <a href="https://t.me/Mickey_Zzz" target="_blank" rel="noopener noreferrer">
              https://t.me/Mickey_Zzz
            </a>
          </li>
          <li className="flex w-full flex-row items-center py-5">
            <p className="mr-5 font-semibold">Гитхаб:</p>
            <a href="https://github.com/MiCkEyZzZ" target="_blank" rel="noopener noreferrer">
              https://github.com/MiCkEyZzZ
            </a>
          </li>
          <li className="flex w-full flex-row items-center py-5">
            <p className="mr-5 font-semibold">Гитфлик:</p>
            <a href="https://gitflic.ru/user/mickeyzzz" target="_blank" rel="noopener noreferrer">
              https://gitflic.ru/user/mickeyzzz
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ContactsPage;
