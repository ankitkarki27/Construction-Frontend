import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import Contact from './components/frontend/Contact';
import Services from './components/frontend/Services';

import './assets/css/index.css'; 
import './assets/css/style.scss';
  
import Login from './components/backend/Login';
// import Dashboard from './components/backend/Dashboard';

// react toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import RequireAuth from './components/common/RequireAuth';

import {default as ShowServices} from './components/backend/services/show';
import {default as CreateServices} from './components/backend/services/Create';
import {default as EditServices} from './components/backend/services/Create';


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
        
        <Route path='/admin/dashboard' element={
          <RequireAuth>
          <Dashboard/>
          </RequireAuth>
          
          }/>

          <Route path='/admin/services' element={
          <RequireAuth>
          <ShowServices/>
          </RequireAuth>
          
          }/>

          <Route path='/admin/services/create' element={
          <RequireAuth>
          <CreateServices/>
          </RequireAuth>          
          }/>

          <Route path='/admin/services/edit/id' element={
          <RequireAuth>
          <EditServices/>
          </RequireAuth>          
          }/>


        </Routes>
      </BrowserRouter>
      <ToastContainer 
      position="top-right"/>
    </>
  )
}

export default App
