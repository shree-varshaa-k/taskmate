import  {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import { AddTask } from './components/AddTask';
// const App = () => {
//   const [count, setCount] = useState(0);
//   const handleAdd =() =>{
//    setCount(count => count +1)
//    setCount(count => count +1)
//    setCount(count => count +1)
//   }
function App () {
 
  const[tasks, setTasks]= useState([
    {id: 1787, name:"react vedio", completed:true},
  {id: 4354, name:"edit this vedio", completed:false},
  {id: 7789, name:"wath the vedio", completed:false}
])
  return(
    <>
    
    <div className='App'>App</div>
    <Header />
    <main>
    <AddTask tasks={tasks} setTasks ={setTasks}/>
   
   <TaskList tasks={tasks} setTasks ={setTasks} />
    </main>
    
  
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

