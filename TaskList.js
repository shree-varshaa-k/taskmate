import React from 'react'
import { useState } from 'react';
import TaskCard from './TaskCard';
import BoxCard from './BoxCard';

const TaskList = (probs) => {
  const[tasks, setTasks]= useState([
    {id: 1787, name:"react vedio", completed:true},
  {id: 4354, name:"edit this vedio", completed:false},
  {id: 7789, name:"wath the vedio", completed:false}
])
const [show,setShow] = useState(true)
const handleEvent = (id) =>{
  // console.log(id);
  setTasks(tasks.filter(task => task.id !== id))
}
  return (
    <>
    <div className='heading'>
    <h1 >Task list</h1>
    <button  onClick={() => setShow(!show)}>Toggle</button>
    </div>
   
    <div className='full'>
    <div className='fullbox'>
    <ul className='task1'>
       {show && tasks.map((task) => (
      <TaskCard randomValue={probs.randomValue} task={task} handleEvent={handleEvent}/>
))}
    </ul>
    
    </div>
    </div>
    <div  className="bbsucess">
    <BoxCard result="success" >
      <p >Lorem, ipsum.</p>
      <p>Lhkjhjhjkkjklkklkl;klkljkjkjkjkjkljkjkhgddsedf</p>
    </BoxCard>
    </div>
    <div  className="bbsucess">
    <BoxCard result="warning">
      <p>Lorem, ipsum.</p>
      <p>Lhkjhjhjkkjklkklkl;klkljkjkjkjkjkljkjkhgddsedf</p>
    </BoxCard>
    </div>
    <div className="bbsucess">
    <BoxCard className="alert">
      <p>Lorem, ipsum.</p>
      <p>Lhkjhjhjkkjklkklkl;klkljkjkjkjkjkljkjkhgddsedf</p>
    </BoxCard>
    </div>
   
    
    </>
  )
}

export default TaskList