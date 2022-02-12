import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Computer from '../components/computer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Andrew Lee</title>
        <meta name="description" content="Andrew's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.landing}>
        <main className={styles.main}>
          <h1 className={styles.title}>Andrew Lee</h1>
        </main>
      </div>
    </div>
  )
}
