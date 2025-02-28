import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div id='appContainer'>
      <h1>Lista de tarefas</h1>
      <div id='tarefaBotao'>
        <input type="text" id='tarefa' placeholder='Qual tarefa deseja incluir?' />
        <button id='botao'>Adicionar</button>
      </div>
      <hr />
      <section id='tarefas'>
        <div>
          <span>O</span>
          <span>Tarefa 1</span>
          <span>*</span>
          <span>X</span>
        </div>
        <div>
          <span>O</span>
          <span style={{ textDecoration: 'line-through' }} >Tarefa 2</span>
          <span>*</span>
          <span>X</span>
        </div>
        
      </section>
    </div>
  )
}

export default App
