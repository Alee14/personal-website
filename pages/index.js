import Meta from '../components/meta'
import Link from 'next/link'
import Computer from '../components/computer'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faDiscord, faGithub, faReddit, faInstagram } from '@fortawesome/free-brands-svg-icons'
const iconSize = "3x"
const iconProperties = "hover:text-gray-500 transition-all ease-in-out"
const navButton = "bg-gray-600 sm:py-4 sm:px-10 py-2 px-5 rounded-lg hover:bg-gray-400 transition ease-in-out"

const isDev = process.env.NODE_ENV === 'development'

export default function Home() {
  return (
    <>
        <Meta title="Home" description="Andrew's Personal Website" />
        <div className="text-center font-hack font-bold flex flex-col gap-4 items-center justify-center h-screen w-screen bg-material-gray text-white drop-shadow-lg">
            <Image src="/Alee.svg" alt="Alee Logo" width={210} height={210} />
            <h1 className="text-4xl drop-shadow-lg">Andrew Lee</h1>
            <h2 className="sm:text-xl text-lg drop-shadow-lg">Computer Geek, Programmer, Content Creator</h2>
            <div className="flex-row space-x-12">
                <a href="https://github.com/Alee14"><FontAwesomeIcon icon={faGithub} size={iconSize} className={iconProperties} /></a>
                <a href="https://discord.gg/EFhRDqG"><FontAwesomeIcon icon={faDiscord} size={iconSize} className={iconProperties} /></a>
                <a href="https://www.youtube.com/c/AndrewLeeCAN"><FontAwesomeIcon icon={faYoutube} size={iconSize} className={iconProperties} /></a>
                <a href="https://twitter.com/Alee14498"><FontAwesomeIcon icon={faTwitter} size={iconSize} className={iconProperties} /></a>
                <a href="https://instagram.com/alee14498"><FontAwesomeIcon icon={faInstagram} size={iconSize} className={iconProperties} /></a>
                <a href="https://reddit.com/Alee1449"><FontAwesomeIcon icon={faReddit} size={iconSize} className={iconProperties} /></a>
            </div>
            {isDev && (
            <div className="flex-row font-normal space-x-3">
                <Link href="#"><button className={navButton}>About Me</button></Link>
                <Link href="#"><button className={navButton}>Projects</button></Link>
                <Link href="#"><button className={navButton}>Blog</button></Link>
                <Link href="#"><button className={navButton}>Downloads</button></Link>
                <Link href="/guidelines"><button className={navButton}>Guidelines</button></Link>
            </div>
            )}
            <h2 className="text-lg font-normal drop-shadow-lg">Contact me at <a href="mailto:andrew@alee14.me">andrew@alee14.me</a></h2>
        </div>
    </>
  )
}
