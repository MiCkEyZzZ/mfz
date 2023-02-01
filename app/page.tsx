import styles from './page.module.css'

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

export default function Home() {
  return <section className={styles.main}></section>
}
