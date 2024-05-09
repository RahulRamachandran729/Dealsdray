import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage'
import { EmployelistPage } from './Routes'

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/employelist" element={<EmployelistPage/>}/>
    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
