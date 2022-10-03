import Head from 'next/head'
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
        <div className="text-center font-hack font-bold flex flex-col gap-4 items-center justify-center h-screen w-screen bg-material-gray text-white drop-shadow-lg">
            <Image src="/Alee.svg" alt="Alee Logo" width={210} height={210} />
            <h1 className="text-4xl drop-shadow-lg">Andrew Lee</h1>
            <h2 className="text-lg drop-shadow-lg">Linux User, Programmer, Computer Geek</h2>
            <h2 className="text-base font-normal drop-shadow-lg">Contact me at andrew@alee14.me</h2>
        </div>
    </>
  )
}
