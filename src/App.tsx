import { useState } from 'react'

import './App.css'
import { Button } from '@mui/material'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import BlogDetail from './BlogDetail'
import AddBlog from './pages/AddBlog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='pt-16'/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<BlogPage/>} />
        <Route path='/add' element={<AddBlog/>}/>
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </>
  )
}

export default App
