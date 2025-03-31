import { Routes, Route } from "react-router-dom";
import Dashboard from "Dashboard";
import Create from "services/Create";
import Show from "services/Show";
import Edit from "services/Edit";

import Create from "projects/Create";
import Show from "projects/Show";
import Edit from "projects/Edit";


import Create from "blogs/Create";
import Show from "blogs/Show";
import Edit from "blogs/Edit";

import Create from "testimonials/Create";
import Show from "testimonials/Show";
import Edit from "testimonials/Edit";

// import { Edit } from "lucide-react";

// 'projects': 'Projects',
// 'createprojects': 'Add Projects',

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<h1>Welcome to Dashboard</h1>} />
        <Route path="services/create" element={<Create />} />
        <Route path="services" element={<Show />} />
        <Route path="services/edit/:id" element={<Edit />} />

        {/* Projects */}
        <Route path="projects/create" element={<Create />} />
        <Route path="projects" element={<Show />} />
        <Route path="projects/edit/:id" element={<Edit />} />

             {/* Blogs */}
        <Route path="blogs/create" element={<Create />} />
        <Route path="blogs" element={<Show />} />
        <Route path="blogs/edit/:id" element={<Edit />} />

        <Route path="testimonials/create" element={<Create />} />
        <Route path="testimonials" element={<Show />} />
        <Route path="testimonials/edit/:id" element={<Edit />} />
        {/* to="/admin/projects/create" */}
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
