import Meta from '../../components/meta'
import Image from "next/image"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning } from '@fortawesome/free-solid-svg-icons'

export default function OsftSoftwareArchive() {
    return (
        <div>
            <Meta title="Philip Adams Software Archive" description="The ultimate software collection of Philip Adams' software" keywords="shiftos, histacom, dark os, htmlive, osfirsttimer, artpad, 12padams, astralphaser" />
            <div className="font-hack bg-material-gray text-white">
                <div className="announcement"><p>Note that this page will be revamped in the future as at the moment this site is currently going through a big rewrite...</p></div>
                <div className="px-5 py-6 space-y-5 flex flex-col">
                    <div className="flex flex-col text-center items-center justify-center space-y-2">
                        <Image src="/Alee.svg" alt="Alee Logo" width={128} height={128} />
                        <h1 className="text-4xl font-bold">Philip Adams Software Archive</h1>
                        <h2 className="text-xl font-bold">The ultimate software collection of Philip Adams&apos; software</h2>
                    </div>
                    <div className="bg-content-warning p-5 rounded-lg text-center">
                        <FontAwesomeIcon icon={faWarning} size="4x" className="pb-2" />
                        <h1 className="text-lg font-bold">CONTENT WARNING</h1>
                        <p>Some of the software in this pack contains a jumpscare. If you have epilepsy, please be cautious.</p>
                        <p>Disable your antivirus as it can detect false positive, feel free to use a VM in case this feels not safe.</p>
                    </div>
                    <p>NOTE FROM ANDREW</p>
                    <ul className="bg-gray-700 p-6 rounded-lg">
                        <p>There was a mention back in the AstralPhaser Chats that the Histacom 1.8.5 (2013) copy in IndieDB is not the original copy from Phil.</p>
                        <p>I have retrieved the original 2010 copy from Phil himself which has the original compile date of July 5th 2010. But I will be keeping both versions for the time being.</p>
                    </ul>
                    <p>Minimal Requirements</p>
                    <ul className="bg-gray-700 p-6 rounded-lg">
                        <li>OS: Windows XP SP3/Vista SP2 (Depends on each program)</li>
                        <li>CPU: Intel/AMD x86 or x64 1 GHz Processor</li>
                        <li>RAM: 512 MB to 1 GB</li>
                        <li>Storage: 500 MB to 4 GB</li>
                        <li>Frameworks: Adobe Flash Player, .NET Framework 3.5, 4.0 and/or 4.5</li>
                    </ul>
                    <p>Programs included in this pack</p>
                    <ul className="bg-gray-700 p-6 rounded-lg">
                        <li>Amazing Maze (Requires Flash Player)</li>
                        <li>Artpad (from ShiftOS)</li>
                        <li>Averager</li>
                        <li>Board Game Maker</li>
                        <li>Bouncing Ball Physics 0.3</li>
                        <li>Chebinect</li>
                        <li>Chrono Machine 0.9.3</li>
                        <li>Colors</li>
                        <li>Dark OS Studio</li>
                        <li>Digging</li>
                        <li>Draw</li>
                        <li>Dropper</li>
                        <li>Explore 0.3.7</li>
                        <li>File Viewer (Jumpscare warning)</li>
                        <li>File Wars</li>
                        <li>&quot;funny nana and grampa sounds version 1.1&quot;</li>
                        <li>Guess The Number</li>
                        <li>Histacom 1.8.5 (2010 Edition) (Epilepsy warning)</li>
                        <li>Histacom 1.8.5 (2013 Edition) (Epilepsy warning)</li>
                        <li>HTMLive</li>
                        <li>IIR (Interactive Infinite Road)</li>
                        <li>Infinijump 0.1</li>
                        <li>Infinijump Creator 0.1</li>
                        <li>Mitosis 0.6</li>
                        <li>OSFirstTimer Blue Screen (Jumpscare warning)</li>
                        <li>Paper Math 2D</li>
                        <li>Philip&apos;s Mario Game</li>
                        <li>Phone Simulator 0.4</li>
                        <li>Picture Generator</li>
                        <li>Pixel Physics 0.3</li>
                        <li>Road Simulator 0.4</li>
                        <li>RPG Map Maker</li>
                        <li>ShiftOS 0.0.8 (Epilepsy warning)</li>
                        <li>Theme Test</li>
                        <li>Thoto 0.3</li>
                        <li>Time Machine 0.4</li>
                        <li>Typewriter</li>
                        <li>Vending Machine</li>
                        <li>Visual Sound (Ear blast warning)</li>
                        <li>Zeon OS 0.2</li>
                    </ul>
                    <div className="font-bold text-sm">
                        <p>MD5: d14f7bfd17fa66ada3d48020deffcce0</p>
                        <p>SHA512: b481d73f839c2ad99b6d6502d5735f416fbcc38dbac811c3d939845d319fecf8b15dd4ff1728ed96abe19077be19527df3692c54751bb81c201e58934d016527</p>
                        <p>SHA256: c7ad3f799f14e610f8931f87e2612385ec39e2662308e7005e10715f9e94c6a0</p>
                    </div>
                    <div className="flex-col space-x-5">
                        <button className="button"><a href="https://cloud.alee14.me/s/GjwJeNb8JBCbaHw">Download Archive</a></button>
                    </div>
                    <div className="text-center pb-2">
                        <Link href="/"><button className="button">Return Homepage</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
