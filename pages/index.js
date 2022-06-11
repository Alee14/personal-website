import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Computer from '../components/computer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Andrew Lee</title>
        <meta name="description" content="Andrew's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="text-center font-hack font-bold">
            <h1 className={styles.title}>Andrew Lee</h1>
            <h2 className={styles.description}>Linux User, Programmer, Computer Nerd</h2>
            <h2 className={styles.contact}>Contact me at andrew@alee14.me</h2>
        </div>
    </>
  )
}
