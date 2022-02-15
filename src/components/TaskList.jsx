import React,{useState, UseEfect, useContext, useEffect, useLayoutEffect} from 'react'
import {DivTasks, LiTask, UlTask} from '../Styles/HomeStyle'
import MyContext from '../MyContext'

export default function TaskList() {
  const [renderTaskList, setRenderTaskList] = useState([])
  const {task} = useContext(MyContext)

  useEffect(() => {
    setRenderTaskList([...renderTaskList, task])
  },[task])

  return (
    <DivTasks>
      <UlTask data-testid="ul-task">
       {renderTaskList.map((_task, index) => {
          <LiTask data-testid="li-task">
          <div>
            {index}
          </div>
          <div>
            <button> editar</button>
            {' '}
            <button> excluir</button>
            {' '}
            <button> concluir</button>
          </div>
        </LiTask>
       })}
      </UlTask>
    </DivTasks>
  )
}
