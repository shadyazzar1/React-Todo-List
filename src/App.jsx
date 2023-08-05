import { useState } from 'react'
import './styless.css'

export default function App (){
  const [Newiteam , setNewiteam ]= useState("") 
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos( (currenttodos) =>{
      return [
        ...currenttodos, 
        {id: crypto.randomUUID(), title: Newiteam ,  completed: false}
      ]
    }
    )
   setNewiteam("")
  }
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return ( 
    <>
    <form  onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor='item'> New item  </label>
          <input value={Newiteam} onChange={e => setNewiteam(e.target.value)} type='text'  id='item '></input>
      </div> 
      <button className='btn'>Add</button>
  </form>
  <h1 className='header'>Todo List</h1>
  <ul className='list'>
    {todos.map( todo =>{
        return <li key={todo.id}>
        <label> 
          <input type='checkbox' checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
          {todo.title}
        </label>
        <button onClick={()=>deleteTodo(todo.id)} className='btn btn-danger' >delete</button>
      </li>

    })}


  </ul>
  </>
  )
}

