import Meta from '../components/meta'
import Link from 'next/link'
import Router from 'next/router'

export default function PageError() {
    return (
        <>
            <Meta title="404"/>
            <div className="text-center font-hack font-bold flex flex-col justify-center gap-4 p-6 h-screen w-screen bg-material-gray text-white drop-shadow-lg">
                <h1 className="text-5xl">404! o_0</h1>
                <h2 className="text-3xl">Looks like you have entered the void... or maybe you are lost?</h2>
                <h2 className="text-3xl">Go back or head back home to not become lost.</h2>
                <div className="flex-row space-x-2">
                    <span onClick={() => Router.back()}><button className="button">Go back</button></span>
                    <Link href="/"><button className="button">Home</button></Link>
                </div>
            </div>
        </>
    )
}
