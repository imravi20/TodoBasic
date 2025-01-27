import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {

  const [todos,setTodos]=useState([]);

  fetch("http://localhost:3000/getTodos/").then(async (response)=>{
    const getTodo=await response.json();
    setTodos(getTodo.todos);
  })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
      </div>
  )
}

export default App
