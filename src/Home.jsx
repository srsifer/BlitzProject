import React from 'react'
import { BodyContent, DivApp} from './Styles/HomeStyle'
import TaskList from './components/TaskList'

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
        <TaskList/>
      </BodyContent>
  )
}

