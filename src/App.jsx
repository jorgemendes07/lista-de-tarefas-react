import { useState } from 'react'
import './App.css'

const App = () => {
  const [tarefa, setTarefa] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const novaTarefa = {
      id: Math.floor(Math.random() * 1000000),
      tarefa: tarefa
    }

    console.log(novaTarefa)
    setTarefa('')
  }

  return (
    <div id='appContainer'>
      <h1>Lista de tarefas</h1>
      <form onSubmit={handleSubmit}>
        <div id='tarefaBotao'>
          <input 
          type="text" 
          id='tarefa' 
          placeholder='Qual tarefa deseja incluir?'
          value={tarefa}
          onChange={(ev) => setTarefa(ev.target.value)}
        />
          <button id='botao' type='submit'>Adicionar</button>
        </div>
      </form>
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
