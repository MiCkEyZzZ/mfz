'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { usePathname, useSearchParams } from 'next/navigation';

export function Form() {
  let pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({});

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    const signInResult = await signIn('email', {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/posts',
    });

    setIsLoading(false);
  };

  return (
    <div className="flex h-96 w-full max-w-sm flex-col">
      <div className="w-full">
        <h1 className="text-center text-2xl font-bold text-[#414141] dark:text-white">
          {pathname === '/login' ? 'Вход' : 'Регистрация'}
        </h1>
        <p className="pt-3 text-center text-sm text-slate-600">Введите свой адрес эл. почты</p>
      </div>
      <div className="my-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="flex w-full flex-col">
            <input
              id="email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email')}
              name="email"
              placeholder="имя@яндекс.ру"
              className="rounded-md border bg-transparent px-3 py-2.5 text-black dark:border-white dark:text-white"
            />
            {errors?.email && (
              <p className='className="px-1 text-red-600" text-xs'>{errors.email.message}</p>
            )}
          </fieldset>
          <div className="mt-5 flex w-full items-center justify-center">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#24292F] px-5 py-3 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
              disabled={isLoading}
            >
              {pathname === '/login' ? 'Войти' : 'Создать'}
            </button>
          </div>
        </form>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-300"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-slate-600 dark:bg-gr-1">или продолжить с</span>
        </div>
      </div>
      <div className="mt-5 flex w-full flex-col">
        <button
          type="button"
          className="dar:text-white inline-flex w-full items-center justify-center rounded-lg border bg-white px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:border-transparent dark:bg-black dark:bg-gr-2 dark:text-white dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
          onClick={() => signIn('github')}
          disabled={isLoading}
        >
          Гитхаб
        </button>
      </div>
      <div className="mt-10 text-center">
        <p className="text-[#414141] dark:text-white">
          {pathname === '/login' ? 'Ещё нет аккаунта?' : 'Уже зарегистрированы?'}
          <Link
            href={pathname === '/login' ? '/registration' : '/login'}
            className="ml-2 text-sm text-[#414141] underline dark:text-white"
          >
            {pathname === '/login' ? 'Регистрация' : 'Вход'}
          </Link>
        </p>
      </div>
    </div>
  );
}
