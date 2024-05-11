import React from 'react'

const ToDoLists = (props) => {
  return (
     <> 
     <div className='lists'>
         <li>{props.text}</li>
         <button onClick={()=>{
          props.onSelect(props.id)
         }}>delete</button>

     </div>
     
     </>
    
  )
}

export default ToDoLists