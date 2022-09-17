import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    llamarNuestraApi();
  }, [heroes])
  
  const llamarNuestraApi = async () => {
    const respuesta = await fetch("http://localhost:4000/superheroes");
    const datos = await respuesta.json();
    console.log(datos);
    setHeroes(datos);
  }

  return (
    <div className="App">
      <h1>Hola API</h1>
      <div>
        {heroes.map(heroe => (
          <div key={heroe.id}>
            <h2>{heroe.nombre}</h2>
            <p>{heroe.editorial}</p>
            <img src={heroe.imagen}></img>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
