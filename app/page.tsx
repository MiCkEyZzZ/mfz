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
    <section className='w-full border'>
      <h1 className='underline'>{information.name}</h1>
    </section>
  )
}
