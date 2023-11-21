import '../globals.css'
import Link from 'next/link'

function layout({ children }) {
    return (
        <main className='cuerpo'>
            <div className='blog'>
                <Link className="page" href="/blog/primer-post">Primer post</Link>
                <Link className="page" href="/blog/segundo-post">Segundo post</Link>
                <Link className="page" href="/blog/tercer-post">Tercer post</Link>
            </div>
            <div className='contenido'>
                {children}
            </div>
        </main>
    )
}

export default layout