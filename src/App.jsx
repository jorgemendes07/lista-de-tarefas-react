import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])
  const [tarefaEdicao, setTarefaEdicao] = useState(null)
  const [novoTexto, setNovoTexto] = useState('')

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

  const handleEditar = (id, texto) => {
    setTarefaEdicao(id)
    setNovoTexto(texto)
  }

  const handleSalvarEdicao = (id) => {
    setTarefas((state) =>
      state.map((tarefa) => 
        tarefa.id === id? { ...tarefa, tarefa: novoTexto } : tarefa
      )
    )
    setTarefaEdicao(null)
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
      <section id='tarefasDiv'>
        {tarefas.map((tarefa) => (
          <div key={tarefa.id}>
            <input 
            type="checkbox"
            id='checkbox'
            checked={tarefa.concluida}
            onChange={() => handleCheckbox(tarefa.id)}
            />

            {tarefaEdicao === tarefa.id? (
              <input 
                id='tarefaEdit'
                type="text"
                value={novoTexto}
                onChange={(ev) => setNovoTexto(ev.target.value)}
                onBlur={() => handleSalvarEdicao(tarefa.id)}
                onKeyDown={(ev) => ev.key === 'Enter' && handleSalvarEdicao(tarefa.id)}  
                autoFocus
              />
            ) : (
              <p 
                style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none'}}
              >
                {tarefa.tarefa}
              </p>
            )}

           <div id='botaoContainer'>
            <span
              onClick={() => handleEditar(tarefa.id, tarefa.tarefa)}
              id='editButton'
              >
              ✏️</span>
              
              <span 
              id='removeButton'
              onClick={() => handleRemove(tarefa.id)}>X</span>
              </div>
           </div>
        ))
      }
      </section>
    </div>
  )
}

export default App