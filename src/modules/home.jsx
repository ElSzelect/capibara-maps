import React from 'react'
import '../styles/home.css'
import carpincho from "../imgs/carpincho.png"
import Map from "../components/map.tsx"

const Home = () => {
  return (
    <main>
        <header >
            <img alt='logo Capibara' className='logo' src={carpincho}/>
            <h1>Capibara Maps</h1>
        </header>
        <div className='container'>
            <section id="sec1">
                <h2>Mapa</h2>
                  <div className='Map'>
                    <Map></Map>
                  </div>
                <p>Convertiremos la distancia entre ambos puntos a Capibaras 🐽🦫</p>
            </section>

        </div>
        <footer>
          <p>Capibara Maps - Todos los derechos reservados</p>

        </footer>
    </main>
  )
}

export default Home
