import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import frontend components
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import Contact from './components/frontend/Contact';
import Services from './components/frontend/Services';

// Import styles
import './assets/css/index.css'; 
import './assets/css/style.scss';

// Import authentication & dashboard
import Login from './components/backend/Login';
import Dashboard from './components/backend/Dashboard';
import RequireAuth from './components/common/RequireAuth';

// Import services-related pages
import ShowServices from './components/backend/services/show';
import CreateServices from './components/backend/services/Create';
import EditServices from './components/backend/services/Edit';

import ShowProjects from './components/backend/projects/Show';
import CreateProjects from './components/backend/projects/Create';
import EditProjects from './components/backend/projects/Edit';

import ShowBlogs from './components/backend/blogs/Show';
import CreateBlogs from './components/backend/blogs/Create';
import EditBlogs from './components/backend/blogs/Edit';

// React Toaster for notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin/login" element={<Login />} />

          {/* Protected Dashboard with Nested Routes */}
          <Route 
            path="/admin/*" 
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            {/*Nested Routes inside Dashboard */}
            <Route index element={<h1>Welcome to Dashboard</h1>} />
            <Route path="services" element={<ShowServices />} />
            <Route path="services/create" element={<CreateServices />} />
            <Route path="services/edit/:id" element={<EditServices />} />ShowProjects

            {/* projects */}
            <Route path="projects" element={<ShowProjects />} />
            <Route path="projects/create" element={<CreateProjects  />} />
            <Route path="projects/edit/:id" element={<EditProjects  />} />

              {/* blogs */}
            <Route path="blogs" element={<ShowBlogs />} />
            <Route path="blogs/create" element={<CreateBlogs />} />
            <Route path="blogs/edit/:id" element={<EditBlogs />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* 📢 Toast Notifications */}
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
