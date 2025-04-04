import { useState } from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Header from './components/common/Header'; 

// Import frontend components
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import Contact from './components/frontend/Contact';
import Services from './components/frontend/Services';

import ServiceDetails from './components/frontend/ServiceDetails';
import BlogDetails from './components/frontend/BlogDetails';
import ProjectDetails from './components/frontend/ProjectDetails';

// FrontTestimonialController

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

import ShowTestimonials from './components/backend/testimonials/Show';
import CreateTestimonials from './components/backend/testimonials/Create';
import EditTestimonials from './components/backend/testimonials/Edit';

import ShowTeams from './components/backend/teams/Show';
import CreateTeams from './components/backend/teams/Create';
import EditTeams from './components/backend/teams/Edit';

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

          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />

 {/* Protected Admin Routes */}
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
            {/* services */}
            <Route path="services" element={<ShowServices />} />
            <Route path="services/create" element={<CreateServices />} />
            <Route path="services/edit/:id" element={<EditServices />} />

            {/* projects */}
            <Route path="projects" element={<ShowProjects />} />
            <Route path="projects/create" element={<CreateProjects  />} />
            <Route path="projects/edit/:id" element={<EditProjects  />} />

              {/* blogs */}
            <Route path="blogs" element={<ShowBlogs />} />
            <Route path="blogs/create" element={<CreateBlogs />} />
            <Route path="blogs/edit/:id" element={<EditBlogs />} />

            {/* testimonials */}
            <Route path="testimonials" element={<ShowTestimonials />} />
            <Route path="testimonials/create" element={<CreateTestimonials />} />
            <Route path="testimonials/edit/:id" element={<EditTestimonials />} />

            <Route path="teams" element={<ShowTeams />} />
            <Route path="teams/create" element={<CreateTeams />} />
            <Route path="teams/edit/:id" element={<EditTeams />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
