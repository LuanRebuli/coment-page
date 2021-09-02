import React from 'react'
import People from './img/people.svg'

import './App.css';


function App() {
  const [comentario, setComentario] = React.useState();
  const [TodosOsComentarios, setTodosOsComentarios] = React.useState([]);

  function changetext(eventoftextarea) {
    setComentario(eventoftextarea.target.value);
  }

  function clickonbutton() {
    const todosOsComentariosAnteriores = [...TodosOsComentarios, comentario];


    setTodosOsComentarios(todosOsComentariosAnteriores);
  }
  return (
    <div>
      <img src={People} alt="imagem-pessoas" />
      <textarea placeholder={"Digite seu comentario"} onChange={changetext}></textarea>
      <button onClick={clickonbutton}>Comentar</button>

      <ul>
        {TodosOsComentarios.map((coment) => (
          <li key={coment} >{coment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
