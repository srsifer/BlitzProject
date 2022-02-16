import React, {useState} from 'react';
import { BodyContent, DivApp} from './Styles/HomeStyle';
import TaskList from './components/TaskList';
//import MyContext from './MyContext'

export default function Home() {
  const [state, setState] = useState();
  const [renderTaskList, setRenderTaskList] = useState();

  const handlechange = ({ value }) => {
    setState(value);
  };

  const handleClick = () => {
    setRenderTaskList(state);
  };

  return (
      <BodyContent>
        <DivApp>
          <input
            type="text"
            name="task"
            data-testid="new-task"
            placeholder='Nova tarefa'
            isRequired
            onChange={(event) => handlechange(event.target)}
            />
          <button 
            type="submit"
            name="task"
            data-testid="subimit-task"
            onClick={() => handleClick()}
            >
            adicionar tarefa
            </button>
          <div>
            Filtros 
            <button>tarefas concluidas</button>
            <button>tarefas a fazer</button>
          </div>
        </DivApp>
        {/*<MyContext.Provider renderTaskList={renderTaskList}>*/}
          <TaskList renderTaskList={renderTaskList}/>
        {/*</MyContext.Provider>*/}
      </BodyContent>
  )
}

