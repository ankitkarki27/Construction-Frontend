import { Routes, Route } from "react-router-dom";
import Dashboard from "Dashboard";
import Create from "services/Create";
import Show from "services/Show";
import Edit from "services/Edit";
// import { Edit } from "lucide-react";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<h1>Welcome to Dashboard</h1>} />
        <Route path="services/create" element={<Create />} />
        <Route path="services" element={<Show />} />
        <Route path="services/edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
