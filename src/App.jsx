import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import StudentPortal from './Pages/StudentPortal'
function App() {
  return (
    <>
  
   
   <Route path="/" element={<Homepage />} />
   <Route path="/studentportal" element={<StudentPortal />} />
  
      </>
  )
}

export default App
