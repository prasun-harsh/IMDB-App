import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoList from './component/TodoList.jsx'



createRoot(document.getElementById('root')).render(<TodoList />);
  // <StrictMode>
  //   <App />
  // </StrictMode>,
// )
