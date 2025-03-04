import { useState } from 'react'
import './App.css'

const App = () => {
  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const novaTarefa = {
      id: Math.floor(Math.random() * 1000000),
      tarefa: tarefa
    }

    setTarefas((state) => [novaTarefa, ...state])
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
        {tarefas.map((tarefa) => (
          <div key={tarefa.id}>
            <input type="checkbox" />
            <p>{tarefa.tarefa}</p>
            <span>*</span> {/* Aqui está simbolizando o ícone de editar tarefa  */}
            <span>X</span> {/* Adicionar funcionalidade de excluir tarefa */}
          </div>
        ))
      }
      </section>
    </div>
  )
}

export default App
