import Link from "next/link";

const Navigation = () => {
    return (
        <div className="flex-row font-normal space-x-3 p-2">
            <Link href="/about"><button className="button">About Me</button></Link>
            <Link href="#"><button className="button">Projects</button></Link>
            <Link href="#"><button className="button">Videos</button></Link>
            <Link href="#"><button className="button">Blog</button></Link>
            <Link href="#"><button className="button">Downloads</button></Link>
            <Link href="/guidelines"><button className="button">Guidelines</button></Link>
        </div>
    )
}

export default Navigation;
