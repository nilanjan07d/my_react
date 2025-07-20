import React,{ useState } from 'react'
import ReactDOM from 'reactr-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-black text-white'>Hello World</h1>
    </>
  )
}

export default App
