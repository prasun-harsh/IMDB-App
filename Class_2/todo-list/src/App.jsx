import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/todo-list'

function App() {
  return(
    <div>
      {/* <TodoList/> */}
      <TodoList title= "Your Todo"/>
    </div>
  )
}

export default App
