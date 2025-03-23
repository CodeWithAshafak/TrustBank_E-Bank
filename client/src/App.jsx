import React from 'react'
import { Route , Routes, BrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Layout/>}>
        <Route path='home' element={<Home/>}/>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
       </Route>
      </Routes>

      <Routes>
        <Route path='dash' element={<Dashboard/>}>
          <Route path=''/>
             
        </Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App