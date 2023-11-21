import '../globals.css'
import Link from 'next/link'

function layout({ children }) {
    return (
        <main className='cuerpo'>
            <div className='tienda'>
                <Link className="page" href="/tienda/electronica">Electrónica</Link>
                <Link className="page" href="/tienda/decoracion">Decoración</Link>
                <Link className="page" href="/tienda/mobiliario">Mobiliario</Link>
                <Link className="page" href="/tienda/libros">Libros</Link>
            </div>
            <div className='contenido'>
                {children}
            </div>
        </main>
    )
}

export default layout