import React from 'react'

const TaskCard = (props) => {
  return (
    <>
     <li key={props.task.id} className= {props.task.completed ? 'completed' : 'incomplete'}>
    {props.task.id} - {props.task.name} -{props.randomValue} 
    <button onClick={() => props.handleEvent(props.task.id)}>Delete</button>
     </li>
    </>
  )
}

export default TaskCard