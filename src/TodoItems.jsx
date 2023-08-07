import React from 'react'

const TodoItems = ({completed,id, title,toggelTodo,deleteTodo}) => {
  return (
    <>
    <li >
            <label>
            <input type="checkbox" checked={completed}
             onChange={e => toggelTodo(id,e.target.checked)}
             />
            {title}
          </label>
          <button className="btn btn-danger" 
          onClick={() => deleteTodo(id)}
          >Delete</button>
          </li>
    </>
  )
}

export default TodoItems
