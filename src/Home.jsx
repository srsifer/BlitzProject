import React from 'react'
import { BodyContent, DivApp, DivTasks, LiTask, UlTask} from './Styles/HomeStyle'

export default function Home() {
  return (
      <BodyContent>
        <DivApp>
          <form action="submit">
            <label htmlFor="task">
              <input type="text" name="task"  data-testid="new-task" placeholder='Nova tarefa'/>
              <input type="submit" name="task" data-testid="subimit-task"/>
            </label>
          </form>
          <div>
            Filtros 
            <button>tarefas concluidas</button>
            <button>tarefas a fazer</button>
          </div>
        </DivApp>
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
      </BodyContent>
  )
}

