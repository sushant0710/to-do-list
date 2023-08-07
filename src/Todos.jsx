import React from 'react'
import TodoItems from './TodoItems'

const Todos = ({todos,toggelTodo,deleteTodo}) => {
    

  

 

  console.log(todos)
  

  return (
    <>
    
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo =>{
          return (
            <TodoItems {...todo} key={todo.id} toggelTodo={toggelTodo} deleteTodo={deleteTodo}/>
          )
        })}
      </ul>
    </>
  )
}

export default Todos
