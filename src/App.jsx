import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <label htmlFor="tarefa"></label>
      <input type="text" placeholder='Qual tarefa deseja incluir?' />
      <button>Adicionar</button>
      <hr />
      <section id='tarefas'></section>
    </div>
  )
}

export default App
