import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andrew Lee</title>
        <meta name="description" content="Andrew's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.landing}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </div>
    </div>
  )
}
