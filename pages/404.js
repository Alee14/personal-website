import Meta from '../components/meta'
import Link from 'next/link'

export default function PageError() {
    return (
        <>
            <Meta title="404"/>
            <div className="text-center font-hack font-bold flex flex-col justify-center gap-4 p-6 h-screen w-screen bg-material-gray text-white drop-shadow-lg">
                <h1 className="text-5xl">404!</h1>
                <h2 className="text-3xl">Looks like you have entered the void... or maybe you are lost?</h2>
                <h2 className="text-3xl">Head back <Link href="/"><a className="link">home</a></Link> to not become lost</h2>
            </div>
        </>
    )
}
