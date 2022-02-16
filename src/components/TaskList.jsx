import React,{/*useContext,*/ useState, useEffect} from 'react'
import {DivTasks, LiTask, UlTask} from '../Styles/HomeStyle'
//import MyContext from '../MyContext'
import PropTypes from 'prop-types';

export default function TaskList({renderTaskList}) {
  //const renderTaskList = useContext(MyContext)
  const [render, setRender] = useState([])
  
  useEffect(() => {
    setRender([...render, renderTaskList])
  },[renderTaskList])

  return (
    <>
    {
      render.map((_element, index) =>{
        return (
        <DivTasks key={index}>
          <UlTask data-testid="ul-task">
          <LiTask data-testid="li-task" key={index}>
              <div>
                {render[index]}
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
        </DivTasks>)
      })
    }
    </>
  )
}

TaskList.propTypes = {
  renderTaskList: PropTypes.arrayOf(PropTypes.string).isRequired
}
