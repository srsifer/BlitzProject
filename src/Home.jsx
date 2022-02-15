import React from 'react'
import { DivApp, DivTasks } from './Styles/HomeStyle'

export default function Home() {
  return (
    <>
      <DivApp>
        <p>Home</p>
        <form action="submit">
          <label htmlFor="task">
            <input type="text" name="task"/>
            <input type="submit" name="task"/>
          </label>
        </form>
        <div>
          <p>aqui ficarão os filtros</p>
          <button>tarefas concluidas</button>
          <button>tarefas a fazer</button>
        </div>
      </DivApp>
      <DivTasks>
        <ul>
          <li>
            aqui ficarão as tarefas
            <button> editar</button>
            <button> excluir</button>
            <button> concluir</button>
          </li>
        </ul>
      </DivTasks>
    </>
  )
}

