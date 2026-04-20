import { useState } from 'react'
import Dashboard from './compontes/Dashboard/Dashboard'
import Courses_list from './compontes/Courses_List/Courses_List'
import Course_Details from './compontes/Course_Details/Course_Details'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/courses" element={<Courses_list/>} />
        <Route path="/courses/:id" element={<Course_Details/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

