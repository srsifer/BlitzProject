import React, {useState} from 'react'
import { BodyContent, DivApp} from './Styles/HomeStyle'
import TaskList from './components/TaskList'
import MyContext from './MyContext'

export default function Home() {
  const [state, setState] = useState(['']);

  const createTask = ({ value }) => {
    setState(...state, value)
  };

  const value = {
    task: state,
  };

  return (
      <BodyContent>
        <DivApp>
          <form action="submit">
            <label htmlFor="task">
              <input
                type="text"
                name="task"
                data-testid="new-task"
                placeholder='Nova tarefa'
                onChange={(e) => createTask(e.target)}
                />
              <button type="button" name="task" data-testid="subimit-task">adicionar tarefa</button>
            </label>
          </form>
          <div>
            Filtros 
            <button>tarefas concluidas</button>
            <button>tarefas a fazer</button>
          </div>
        </DivApp>
        <MyContext.Provider value={value}>
          <TaskList/>
        </MyContext.Provider>
      </BodyContent>
  )
}

