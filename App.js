import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// const App = () => {
//   const [count, setCount] = useState(0);
//   const handleAdd =() =>{
//    setCount(count => count +1)
//    setCount(count => count +1)
//    setCount(count => count +1)
//   }
const App =() =>{
  const[tasks, setTasks]= useState([{id: 1787, name:"react vedio", completed:true},
  {id: 4354, name:"edit this vedio", completed:false},
  {id: 7789, name:"wath the vedio", completed:false}
])
const handleEvent = (id) =>{
  // console.log(id);
  setTasks(tasks.filter(task => task.id !== id))
}
  return(
    <>
    <Header />
    <div className='App'>App</div>
    <h1>Task list</h1>
    <ul>
       {tasks.map((task) => (
  <li key={task.id}>
    {task.id} - {task.name} 
    <button onClick={() => handleEvent(task.id)}>Delete</button>
  </li>
))}
    </ul>
  
<Footer />
</>
  )
}
  // return(
    // <>
    // <Header/>
  //   {/* <div className="App">
  //   <div className='box'>
  //     <p>{count}</p>
  //     <button onClick = {handleAdd} className="add">ADD</button>
  //     <button className="sub">SUB</button>
  //     <button className="reset">RESET</button>
  //   </div>
  //  </div> */}
  //   {/* <Footer/>
  //   </>
  // );

// } */}
export default App;
