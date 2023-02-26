import Link from 'next/link';

function LoginPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-7xl items-center justify-center">
        <div className="flex h-96 w-full max-w-sm flex-col">
          <div className="w-full">
            <h1 className="text-center text-2xl font-bold text-[#414141] dark:text-white">Вход</h1>
            <p className="pt-3 text-center text-sm text-slate-600">Введите свой адрес эл. почты</p>
          </div>
          <div className="my-5">
            <form>
              <fieldset className="flex w-full flex-col">
                <label htmlFor="email"></label>
                <input
                  id="email"
                  type="text"
                  placeholder="имя@яндекс.ру"
                  className="rounded-md border bg-white px-3 py-2.5 dark:border-white dark:bg-black"
                />
              </fieldset>
              <div className="mt-5 flex w-full items-center justify-center">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#24292F] px-5 py-3 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
                >
                  Войти
                </button>
              </div>
            </form>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-600 dark:bg-black">или продолжить с</span>
            </div>
          </div>
          <div className="mt-5 w-full">
            <button
              type="button"
              className="dar:text-white inline-flex w-full items-center justify-center rounded-lg border bg-white px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:bg-black dark:text-white dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
            >
              Гитхаб
            </button>
          </div>
          <div className="mt-10 text-center">
            <p className="text-[#414141] dark:text-white">
              У вас нет учетной записи?
              <Link
                href="/registration"
                className="ml-2 text-sm text-[#414141] underline dark:text-white"
              >
                Регистрация
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
