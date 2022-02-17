import React,{useState, useEffect} from 'react'
import  TaskOnly  from './TaskOnly'
import PropTypes from 'prop-types';

export default function TaskList({renderTaskList}) {
  const [render, setRender] = useState([])
  const [edditing, setEdditing] = useState(false);
  const [hadlleChangeEdit, setHiliteChangeEdit] = useState('');

  useEffect(() => {
    if (renderTaskList !== undefined) {
      setRender([...render, renderTaskList])
    }
    return null;
  },[renderTaskList])

  const removeTask = (target) => {
    render.splice(target.id,1)
    setRender([...render])
  }

  const cancelEditTask = () => {
    setEdditing(false)
  }
  
  const editTask = () => {
    setEdditing(true)
  }

  const saveEditedTask = (target) => {
    render.splice(target.id,1, hadlleChangeEdit)
    setEdditing(false)
  }

  const completTask = (target) => {
    console.log(`completando a tarefa${ target.id}`)
  }

  const EditingValue = ({value}) => {
    setHiliteChangeEdit(value)
  }

  return (
    render !== [] && (
      <>{render.map(
        (_element, index) => {
          return(
            <TaskOnly
              key={index}
              cancelEditTask={cancelEditTask}
              index={index}
              edditing={edditing}
              removeTask={removeTask}
              editTask={editTask}
              saveEditedTask={saveEditedTask}
              completTask={completTask}
              EditingValue={EditingValue}
              render={render}
            />
          )}
        )}
      </>
    )
  )
}

TaskList.propTypes = {
  renderTaskList: PropTypes.string,
}
