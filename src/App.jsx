import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    const listaDeTarefas = localStorage.getItem('tarefas')
    if (listaDeTarefas) {
      setTarefas(JSON.parse(listaDeTarefas))
    }
  }, [])

  useEffect(() => {
    if (tarefas.length > 0) {
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }
  }, [tarefas])


  const handleSubmit = (ev) => {
    ev.preventDefault()

    if (tarefa.trim() === '') {
      return
    }

    const novaTarefa = {
      id: Date.now(),
      tarefa: tarefa,
      concluida: false
    }

    setTarefas((state) => [...state, novaTarefa])
    setTarefa('')
  }

  const handleRemove = (id) => {
    setTarefas((state) => state.filter(tarefa => tarefa.id !== id))
  }

  const handleCheckbox = (id) => {
    setTarefas((state) => 
      state.map(tarefa =>
        tarefa.id === id? { ...tarefa, concluida: !tarefa.concluida  } : tarefa
      )
    )
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
            <input 
            type="checkbox"
            checked={tarefa.concluida}
            onChange={() => handleCheckbox(tarefa.id)}
            />
            <p 
            style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none'}}
            >{tarefa.tarefa}
            </p>
            <span>*</span> {/* Aqui está simbolizando o ícone de editar tarefa  */}
            <span 
            id='removeButton'
            onClick={() => handleRemove(tarefa.id)}>X</span>
          </div>
        ))
      }
      </section>
    </div>
  )
}

export default App
