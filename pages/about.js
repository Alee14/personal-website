import Meta from '../components/meta'
import Image from "next/image";

export default function About() {
    return (
        <div>
            <Meta title="About Me" description="About Andrew Lee"/>
            <div className="font-hack bg-material-gray text-white px-5 py-6 flex flex-row">
                <div className="bg-gray-600 px-10 py-5">
                    <div className="font-bold">
                        <Image src="/Alee.png" alt="Alee Logo" width={128} height={128} />
                        <h1 className="text-center text-xl">Andrew Lee</h1>
                        <h2>Age: 18</h2>
                        <h2>Location: Montreal, Canada</h2>
                        <h2>Description</h2>
                    </div>
                </div>
                <div className="bg-green-500">
                    <h1>Test 1</h1>
                </div>
            </div>
        </div>
    )
}
