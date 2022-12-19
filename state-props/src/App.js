import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCircleCheck, faPen} from '@fortawesome/free-solid-svg-icons'
import './index.css'




function App() {
  const [toDo, setToDo] = useState([])

  // useEffect(() => {
  //   setToDo()
  // }, [])

  const [newTask, setNewTask] = useState('')


  function Addtask(){
    if(newTask){
      let num = toDo.length + 1
      let newEntry = {id: num, title: newTask, status: false}
      setToDo([...toDo, newEntry])
      setNewTask(' ')
    }
  }

  function deleteTask(id){
    let newTasks = toDo.filter(eachList => eachList.id !== id)
    setToDo(newTasks)
  }

  function markDone(id){
    let newTask = toDo.map(list => {
      if(list.id === id){
        return(
          {...list, status: !list.status}
        )
      }
      return list;    
    })
    setToDo(newTask)
  }

  return (
    <div className="container-app">
      <h1 className='title'>To Do App</h1>
      <br></br>
      <div className='addTask'>
        <div className="input-group mb-3">
          <input type="text" 
            className="form-control" 
            placeholder="Enter your task"
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
          />
        <div clasName="input-group-append">
          <span className="input-group-text button"
            id="basic-addon2"
            onClick={Addtask}>
              Add Task
          </span>
        </div>
</div>
      
      </div>

      <div className='message'>
        {toDo.length ? '' : <i>No Tasks....</i> }
      </div>

      {toDo.map((task) => {
        return(
          <div className= 'tasks' key={task.id}>
            <div className={task.status ? 'done' : '' }>
              <span className='task-title'>{task.title}</span>
            </div>

            <div className='icons'>
                <span className='span'
                    onClick={() => markDone(task.id)}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span className='span'
                  onClick={() => deleteTask(task.id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
            </div>
          </div>
        )
      })}


      

      
    </div>
  );
}

export default App;


// {toDo.map((item) =>{
//   return (
//     <table key={item.id}>
//       <tr>
//         <th>Task name</th>
//         <th>Status</th>
//       </tr>
//       <tr>
//         <td>{item.title}</td>
//         <td>{item.status}</td>
//       </tr>
//     </table>
//   )
// }

// )}