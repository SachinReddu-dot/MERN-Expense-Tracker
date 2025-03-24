import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Create from './Pages/Create'
import AllUser from './Pages/AllUser'
import Update from './Pages/Update'

const App = () => {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Create />}/>
      <Route path='/all-user' element={<AllUser />}/>
      <Route path='/update' element={<Update />}/>
    </Routes>
  </>
  )
}

export default App