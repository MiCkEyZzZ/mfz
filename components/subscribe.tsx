import Balancer from 'react-wrap-balancer';

function Subscribe(): JSX.Element {
  return (
    <section className="my-24 flex w-full flex-col items-center px-5 md:px-5">
      <div className="flex w-full max-w-6xl flex-col justify-between">
        <div className="w-full max-w-xl">
          <h2 className="mb-6 text-2xl text-[#414141] dark:text-white md:text-3xl lg:text-4xl">
            <Balancer>Каждый день выходит, что-то новое - не пропустите интересное.</Balancer>
          </h2>
          <p className="text-base text-[#414141] opacity-70 dark:text-white md:text-xl lg:text-xl">
            <Balancer>
              Подпишись на рассылку новостей и будь в курсе о выходе новых материалов.
            </Balancer>
          </p>
        </div>
        <div className="mt-16 w-full">
          <form className="flex w-full max-w-xl flex-col items-center md:flex-row">
            <fieldset className="w-full">
              <input
                type="text"
                placeholder="вы@домен.ру"
                className="w-full appearance-none rounded-md border border-black bg-white px-3 py-3 dark:border-white dark:bg-black md:py-3"
              />
            </fieldset>
            <div className="mt-5 ml-auto md:ml-5 md:mt-0">
              <button
                type="submit"
                aria-label="Подписаться"
                className="transform-gpu rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:border-white dark:hover:bg-white dark:hover:text-black md:px-7 md:py-3 md:leading-6"
              >
                Подписаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
