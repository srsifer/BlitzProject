import React,{/*useContext,*/ useState, useEffect} from 'react'
import {DivTasks, LiTask, UlTask} from '../Styles/HomeStyle'
//import MyContext from '../MyContext'
import PropTypes from 'prop-types';

export default function TaskList({renderTaskList}) {
  const [render, setRender] = useState([])
  //const [noTask, setNoTask] = useState(false);
  
  useEffect(() => {
    if (renderTaskList !== undefined) {
      setRender([...render, renderTaskList])
    }
    return null;
  },[renderTaskList])


  return (
    render !== [] && (
      <div>
        {render.map((_element, index) => {
          return(
          <DivTasks key={index}>
            <UlTask data-testid="ul-task">
              <LiTask data-testid="li-task" key={index}>
                <div>
                  {render[index]}
                </div>
                <div>
                  <button> editar </button>
                  {' '}
                  <button> excluir</button>
                  {' '}
                  <button> concluir</button>
                </div>
              </LiTask>
            </UlTask>
          </DivTasks>
      )})}
    )
    </div>
    )
  )
}

TaskList.propTypes = {
  renderTaskList: PropTypes.arrayOf(PropTypes.string).isRequired
}
