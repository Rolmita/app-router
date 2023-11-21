import Link from 'next/link'

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <Link className="page" href="/">Inicio</Link>
                <Link className="page" href="/tienda">Tienda</Link>
                <Link className="page" href="/blog">Blog</Link>
            </div>
            <div>
                <Link className="page" href="/acerca">Acerca de...</Link>
                <Link className="page" href="/registro">Registrarme</Link>
            </div>
        </nav>
    )
}

export default Navbar;