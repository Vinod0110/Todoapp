import React, { useState } from 'react'
import ToDoLists from './ToDoLists';
const ToDoList = () => {
    const [task, setTask] = useState("");
    const [taskItem, setTaskItem] = useState([]);

    const handlechange = (event)=>{
       setTask(event.target.value);
    }

    const taskList = () => {
        if (task.trim() !== '') { 
            setTaskItem((preItems) => {
                return [...preItems, task]
            });
            setTask("");
        }
    }

    const deleteItem = (id)=>{
        setTaskItem((preItems) => {
            return preItems.filter((arrElem, index) =>{
                return index !== id;
            })
        })
    }

  return (
    <>
        <div className='main_div'>
            <div className='center_div'>
                <h1>Your's ToDo</h1>
                <br />
                <input type="text" onChange={handlechange} value={task} placeholder='Enter Your Task' />
                <button onClick={taskList}>Add</button>

                <ol>
                    {taskItem.map((itemval, index)=>{
                      return  <ToDoLists text ={itemval} key={index} id={index} onSelect={deleteItem} />
                    })}
                </ol>
            </div>
        </div>
    </>
  )
}

export default ToDoList