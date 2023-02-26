function Comments(): JSX.Element {
  return (
    <div className="mt-3 flex w-full flex-col px-0 py-5">
      <h1 className="font-semibold text-[#414141] dark:text-white">Комментарии</h1>
      <div className="mt-2 flex w-full flex-col">
        <textarea className="h-28 w-full rounded-md border bg-white dark:bg-black"></textarea>
        <div className="mt-2 flex w-full flex-col items-center justify-start">
          <button
            type="submit"
            className="mr-0 ml-auto transform-gpu rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 md:leading-6"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
