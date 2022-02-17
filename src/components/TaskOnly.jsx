import React from 'react'
import {DivTasks, LiTask, UlTask} from '../Styles/HomeStyle'
import PropTypes from 'prop-types'

export default function TaskOnly({
  cancelEditTask,
  index,
  edditing,
  removeTask,
  editTask,
  saveEditedTask,
  completTask,
  EditingValue,
  render
}) {
  return (
    <div> 
      <DivTasks >
        <UlTask data-testid="ul-task">
          <LiTask data-testid="li-task" key={index}>
            <div>
              {render[index]}
            </div>
            <div>
              <button
                id={index}
                onClick={() => editTask()}
              >
                editar
              </button>
              {' '}
              {edditing &&
                (
                  <>
                    <input
                      type="text"
                      onChange={(e) => EditingValue(e.target)}
                    /> 
                    {' '}
                    <button
                      id={index}
                      onClick={(e) => saveEditedTask(e.target)}
                    >
                      salvar
                    </button>
                    {' '}
                    <button
                      id={index}
                      onClick={() => cancelEditTask()}
                    >
                      cancelar
                    </button>
                  </>
                )
              }
              {' '}
              <button
                id={index}
                onClick={ (e) => removeTask(e.target)}
              >
                excluir
              </button>
              {' '}
              <button
                id={index}
                onClick={(e) => completTask(e.target)}
              >
                concluir
              </button>
            </div>
          </LiTask>
        </UlTask>
      </DivTasks>
    </div>
  )
}

TaskOnly.propTypes = {
  index: PropTypes.number.isRequired,
  edditing: PropTypes.bool.isRequired,
  removeTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
  saveEditedTask: PropTypes.func.isRequired,
  completTask: PropTypes.func.isRequired,
  EditingValue: PropTypes.func.isRequired,
  render: PropTypes.arrayOf(PropTypes.string).isRequired,
  cancelEditTask: PropTypes.func.isRequired,
}