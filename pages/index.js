import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Computer from '../components/computer'
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Andrew Lee</title>
        <meta name="description" content="Andrew's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="text-center font-hack font-bold flex flex-col gap-4 items-center justify-center h-screen w-screen bg-material-gray text-white">
            <Image src="/Alee.svg" alt="Alee Logo" width={210} height={210} />
            <h1 className="text-4xl">Andrew Lee</h1>
            <h2 className="text-lg">Linux User, Programmer, Computer Nerd</h2>
            <h2 className="text-base font-normal">Contact me at andrew@alee14.me</h2>
        </div>
    </>
  )
}
