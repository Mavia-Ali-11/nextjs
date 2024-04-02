import Link from 'next/link'

export default function Projects({ children, parallel }) {
    return (
        <main className="main">
            <ul className="menu">
                <li><Link href="/projects">All</Link></li>
                <li><Link href="/projects/reactjs">React JS</Link></li>
                <li><Link href="/projects/nextjs">NEXT JS</Link></li>
                <li><Link href="/projects/custom-coded">HTML, CSS, & JS</Link></li>
                <li><Link href="/projects/wordpress">WordPress</Link></li>
            </ul>
            {/* {parallel} */}
            {children}
        </main>
    )
}
