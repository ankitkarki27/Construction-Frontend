import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import Contact from './components/frontend/Contact';
import Services from './components/frontend/Services';

import './assets/css/index.css'; 
import Login from './components/backend/Login';

// react toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer 
      position="top-right"/>
    </>
  )
}

export default App
