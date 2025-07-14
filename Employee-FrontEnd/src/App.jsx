import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Login } from './components/Login'
import { Update } from './components/Update'
import { AddEmployee } from './components/AddEmployee'

function App() {
  

  return (
    <div className='img-back'>
      <BrowserRouter>
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='login' element={<Login/>}/>
             <Route path='update/:id' element={<Update/>}/>
             <Route path='addEmployee' element={<AddEmployee/>}/>
           </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
