import Nav from "./Componentes/Nav";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const url = "https://rickandmortyapi.com/api/character";

  const [personaje, setPersonaje] = useState([]);

  const peticionUrl = (dato) => {
    fetch(dato)
      .then((respuesta) => respuesta.json())
      .then((json) =>
        setPersonaje(
          json.results.map(({name, id ,species,image}) => {
            console.log(name);
            return (
              <div className="tarj" key={id}>
                <h1>Personaje numero {id}</h1>
                <img src={image} alt="Foto Personaje" />
                <h4>Name:{name}</h4>
                <p>Especie:{species}</p>
              </div>
            );
          })
        )
      )
      .catch(console.error);
  };

  useEffect(() => {
    peticionUrl(url);
  }, []);

  return (
    <div className="app">
      <Nav />
      <div className="tarjeta">{personaje}</div>
    </div>
  );
}

export default App;
