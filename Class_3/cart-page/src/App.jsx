import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Cart Page</h1>
      <Cart />
    </div>
  )
}

export default App
