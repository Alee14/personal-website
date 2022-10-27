import Meta from '../../components/meta'
import Image from "next/image"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning } from '@fortawesome/free-solid-svg-icons'

export default function OsftSoftwareArchive() {
    return (
        <div>
            <Meta title="Philip Adams Software Archive" description="The ultimate software collection of Philip Adams' software"/>
            <div className="font-hack bg-material-gray text-white">
                <div className="announcement"><p>Note that this page will be revamped in the future as at the moment this site is currently going through a big rewrite...</p></div>
                <div className="px-5 py-6 space-y-5 flex flex-col">
                    <div className="flex flex-col text-center items-center justify-center space-y-2">
                        <Image src="/Alee.svg" alt="Alee Logo" width={128} height={128} />
                        <h1 className="text-4xl font-bold">Philip Adams Software Archive</h1>
                        <h2 className="text-xl font-bold">The ultimate software collection of Philip Adams&apos; software</h2>
                        <p>These software require .NET Framework 3.5, 4.0 and/or 4.5 to function.</p>
                    </div>
                    <div className="bg-yellow-700 p-5 rounded-lg text-center">
                        <FontAwesomeIcon icon={faWarning} size="3x" className="pb-2" />
                        <h1 className="text-lg font-bold">CONTENT WARNING</h1>
                        <p>Some of the software in this pack contains a jumpscare. If you have epilepsy, please be cautious.</p>
                        <p>Disable your antivirus as it can detect false positive, feel free to use a VM in case this feels not safe.</p>
                    </div>
                    <p>Pack will include the following:</p>
                    <ul className="bg-gray-700 p-6 rounded-lg">
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
                        <li>Histacom 1.8.5 (Epliespy warning)</li>
                        <li>HTMLive</li>
                        <li>IIR (Interactive Infinite Road)</li>
                        <li>Infinijump 0.1</li>
                        <li>Mitosis 0.6</li>
                        <li>OSFirstTimer Blue Screen (Jumpscare warning)</li>
                        <li>Paper Math 2D</li>
                        <li>Philip&apos;s Mario Game</li>
                        <li>Phone Simulator 0.4</li>
                        <li>Picture Generator</li>
                        <li>Pixel Physics 0.3</li>
                        <li>Road Simulator 0.4</li>
                        <li>RPG Map Maker</li>
                        <li>ShiftOS 0.0.8 (Epliespy warning)</li>
                        <li>Theme Test</li>
                        <li>Thoto 0.3</li>
                        <li>Time Machine 0.4</li>
                        <li>Typewriter</li>
                        <li>Vending Machine</li>
                        <li>Visual Sound (Ear blast warning)</li>
                        <li>Zeon OS 0.2</li>
                    </ul>
                    <div className="font-bold text-sm">
                        <p>MD5 Hash: 0665543e3d85bdf017b74a0a35ac73b6</p>
                        <p>SHA512: a9f2927ccfd3c2ebb5ec00f9ed97f888ddefd0d3ae97391de47a5fcdbbe614bbd76f0a33ce71174346d71463abbadcb49c8ad40d08dd071f31ae3d5711e0bcf4</p>
                        <p>SHA256: b4358195900da09a2068039f9b9c80b2c854b72663c88a3f6f168cb4fbe7d2b4</p>
                    </div>
                    <div className="flex-col space-x-5">
                        <button className="button"><a href="/uploads/OSFT-Software-Archive.zip">Download Archive</a></button>
                    </div>
                    <div className="text-center pb-2">
                        <Link href="/"><button className="button">Return Homepage</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
