import Nav from './Componentes/Nav'
import './App.css'
import { useEffect,useState } from 'react'

function App() {

  const url="https://rickandmortyapi.com/api/character"

  const [personaje,setPersonaje]=useState([]);

  const PeticionUrl=(dato=>{
    fetch(dato)
    .then(respuesta=> respuesta.json())
    .then(data => setPersonaje(data))
    .catch(error=>console.error(error))})

    useEffect(()=>{
      PeticionUrl(url)
    },[])

 
  
  return (<>

    <Nav/>

    </>
  )
}

   export default App
