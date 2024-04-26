import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './componentes/header/header.jsx'; 
import Sidebar from './componentes/sidebar/sidebar.jsx';
import Content from './componentes/content/content.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header />
      <Sidebar />
      <Content />
    </div>
      
    </>
  )
}

export default App
