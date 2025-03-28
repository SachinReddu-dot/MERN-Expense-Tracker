import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import Register from './components/auth/Register'
import Login from './components/auth/login'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/auth' element={ <Auth /> }>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App