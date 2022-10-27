import Meta from '../components/meta'
import Link from 'next/link'
import Computer from '../components/computer'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faDiscord, faGithub, faReddit, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const iconSize = "3x"
const iconProperties = "hover:text-gray-700 transition-all ease-in-out"

const isDev = process.env.NODE_ENV === 'development'

export default function Home() {
  return (
    <>
        <Meta title="Home" description="Andrew's Personal Website" />
        <div className="bg-material-gray font-hack text-white overflow-hidden">
            {isDev && (
                <div className="announcement"><p>You are using the development version of this site! Certain features are hidden from the public...</p></div>
                )}
            <div className="text-center flex flex-col gap-4 justify-center items-center h-screen w-screen">
                <Image src="/Alee.svg" alt="Alee Logo" width={210} height={210} />
                <h1 className="text-4xl font-bold">Andrew Lee</h1>
                <h2 className="sm:text-xl text-lg font-bold">Computer Geek, Programmer, Content Creator</h2>
                <div className="sm:scale-100 scale-75 flex-row space-x-12 p-2">
                    <a href="https://github.com/Alee14" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size={iconSize} className={iconProperties} /></a>
                    {/*<a href="https://www.linkedin.com/in/andrew-lee-982b3b23a" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size={iconSize} className={iconProperties} /></a>*/}
                    <a href="https://discord.gg/EFhRDqG" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} size={iconSize} className={iconProperties} /></a>
                    <a href="https://www.youtube.com/c/AndrewLeeCAN" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size={iconSize} className={iconProperties} /></a>
                    <a href="https://twitter.com/Alee14498" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size={iconSize} className={iconProperties} /></a>
                    <a href="https://instagram.com/alee14498" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size={iconSize} className={iconProperties} /></a>
                    <a href="https://reddit.com/u/Alee1449" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faReddit} size={iconSize} className={iconProperties} /></a>
                </div>
                {isDev && (
                    <div className="flex-row font-normal space-x-3 p-2">
                        <Link href="#"><button className="button">About Me</button></Link>
                        <Link href="#"><button className="button">Projects</button></Link>
                        <Link href="#"><button className="button">Videos</button></Link>
                        <Link href="#"><button className="button">Blog</button></Link>
                        <Link href="#"><button className="button">Downloads</button></Link>
                        <Link href="/guidelines"><button className="button">Guidelines</button></Link>
                    </div>
                )}
                <h2 className="text-lg font-normal drop-shadow-lg">Contact me at <a href="mailto:andrew@alee14.me">andrew@alee14.me</a> for anything.</h2>
            </div>
            <div className="text-center justify-center font-bold pb-5 flex flex-col space-y-3">
                <p>&copy; Copyright 2018-2022 Andrew Lee</p>
                <p>Created using <a href="https://nextjs.org" className="link" target="_blank" rel="noopener noreferrer">Next.js</a>, and <a href="https://tailwindcss.com" className="link" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>. Hosted on <a href="https://www.netlify.com" className="link" target="_blank" rel="noopener noreferrer">Netlify</a>.</p>
                <p>Using <a href="https://fontawesome.com">FontAwesome</a> as the main icon style for this site.</p>
	  	        <p>This website is licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" className="link" target="_blank" rel="noopener noreferrer">GNU General Public License v3</a></p>
                <p className="link"><a href="https://github.com/Alee14/personal-website" target="_blank" rel="noopener noreferrer">The source code of this website is publicly available</a></p>
            </div>
        </div>

    </>
  )
}
