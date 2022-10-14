import Head from 'next/head'
import Computer from '../components/computer'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faDiscord, faGithub, faReddit, faInstagram } from '@fortawesome/free-brands-svg-icons'
const iconSize = "3x"

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
            <h2 className="text-xl drop-shadow-lg">Computer Geek, Programmer, Content Creator</h2>
            <div className="flex-row space-x-12">
                <a href="https://github.com/Alee14"><FontAwesomeIcon icon={faGithub} size={iconSize} /></a>
                <a href="https://discord.gg/EFhRDqG"><FontAwesomeIcon icon={faDiscord} size={iconSize} /></a>
                <a href="https://www.youtube.com/c/AndrewLeeCAN"><FontAwesomeIcon icon={faYoutube} size={iconSize} /></a>
                <a href="https://twitter.com/Alee14498"><FontAwesomeIcon icon={faTwitter} size={iconSize} /></a>
                <a href="https://reddit.com/Alee1449"><FontAwesomeIcon icon={faReddit} size={iconSize} /></a>
                <a href="https://instagram.com/alee14498"><FontAwesomeIcon icon={faInstagram} size={iconSize} /></a>
            </div>
            <h2 className="text-lg font-normal drop-shadow-lg">Contact me at andrew@alee14.me</h2>
        </div>
    </>
  )
}
