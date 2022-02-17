import React,{/*useContext,*/ useState, useEffect} from 'react'
import {DivTasks, LiTask, UlTask} from '../Styles/HomeStyle'
//import MyContext from '../MyContext'
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
      <>
        {render.map((_element, index) => {
          return(
          <DivTasks key={index}>
            <UlTask data-testid="ul-task">
              <LiTask data-testid="li-task" key={index}>
                <div>
                  {render[index]}
                </div>
                <div>
                  <button id={index} onClick={() => editTask()}> editar </button>
                  {' '}
                  {edditing ? (
                    <><input type="text" display="hidden" onChange={(e) => EditingValue(e.target)}/> 
                    {' '}
                      <button id={index} onClick={(e) => saveEditedTask(e.target)}>salvar</button>
                    </>) : null}
                    {' '}
                  <button id={index} onClick={ (e) => removeTask(e.target)}> excluir</button>
                  {' '}
                  <button id={index} onClick={(e) => completTask(e.target)}> concluir</button>
                </div>
              </LiTask>
            </UlTask>
          </DivTasks>
      )})}
    )
    </>
    )
  )
}

TaskList.propTypes = {
  renderTaskList: PropTypes.string,
}
