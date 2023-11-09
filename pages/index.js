import Meta from '../components/meta'
import Navigation from '../components/nav'
import Computer from '../components/computer'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faDiscord, faGithub, faReddit, faInstagram, faLinkedin, faMastodon, faPaypal } from '@fortawesome/free-brands-svg-icons'
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
                <Image src="/Alee.png" alt="Alee Logo" className="rounded-full" width={230} height={230} />
                <h1 className="text-4xl font-bold">Andrew Lee</h1>
                <h2 className="sm:text-xl text-lg font-bold">Computer Geek, Programmer, Content Creator</h2>
                <div className="sm:scale-100 scale-75 flex-row space-x-12 p-2">
                    <a href="https://github.alee14.me" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size={iconSize} className={iconProperties} /></a>
                    <a href="https://linkedin.alee14.me" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size={iconSize} className={iconProperties} /></a>
                    <a href="https://paypal.me/alee14498" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPaypal} size={iconSize} className={iconProperties} /></a>
                    <a href="https://discord.alee14.me" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} size={iconSize} className={iconProperties} /></a>
                    <a href="https://youtube.alee14.me" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size={iconSize} className={iconProperties} /></a>
                    <a href="https://mstdn.ca/@alee" target="_blank" rel="noopener noreferrer me"><FontAwesomeIcon icon={faMastodon} size={iconSize} className={iconProperties} /></a>
                    <a href="https://twitter.alee14.me" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size={iconSize} className={iconProperties} /></a>
                    <a href="https://instagram.alee14.me" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size={iconSize} className={iconProperties} /></a>
                    <a href="https://reddit.alee14.me" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faReddit} size={iconSize} className={iconProperties} /></a>
                </div>
                {isDev && (
                    <Navigation/>
                )}
                <h2 className="text-lg font-normal drop-shadow-lg">Contact me at <a href="mailto:andrew@alee14.me">andrew@alee14.me</a> for anything.</h2>
            </div>
            <div className="text-center justify-center font-bold pb-5 flex flex-col space-y-3">
                <p>&copy; Copyright 2018-2023 Andrew Lee</p>
                <p>Created using <a href="https://nextjs.org" className="link" target="_blank" rel="noopener noreferrer">Next.js</a>, and <a href="https://tailwindcss.com" className="link" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>. Hosted on <a href="https://www.vercel.com" className="link" target="_blank" rel="noopener noreferrer">Vercel</a>.</p>
                <p>Using <a href="https://fontawesome.com" className="link">FontAwesome</a> as the main icon style for this site.</p>
	  	        <p>This website is licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" className="link" target="_blank" rel="noopener noreferrer">GNU General Public License v3</a></p>
                <p className="link"><a href="https://github.com/Alee14/personal-website" target="_blank" rel="noopener noreferrer">The source code of this website is publicly available</a></p>
            </div>
        </div>

    </>
  )
}
