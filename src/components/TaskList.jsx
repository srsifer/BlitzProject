import React,{useState, UseEfect} from 'react'
import {DivTasks, LiTask, UlTask} from '../Styles/HomeStyle'

export default function TaskList() {

  return (
    <DivTasks>
      <UlTask data-testid="ul-task">
        <LiTask data-testid="li-task">
          <div>
            aqui ficarão as tarefas
          </div>
          <div>
            <button> editar</button>
            {' '}
            <button> excluir</button>
            {' '}
            <button> concluir</button>
          </div>
        </LiTask>
      </UlTask>
    </DivTasks>
  )
}
