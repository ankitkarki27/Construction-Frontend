import React, { useContext, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "./context/Auth";
import { Home, LogOut, PlusCircle, Eye, ChevronDown, ChevronUp, Layers } from "lucide-react";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Page title configuration
  const pathnames = location.pathname.split('/').filter(x => x);
  const pageTitles = {
    'admin': 'Dashboard',
    'services': 'Services',
    'create': 'Add Service',
    // 'edit': 'Edit Service'
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Slim Sidebar */}
      <div className="bg-white w-56 flex flex-col h-full border-r border-gray-200 relative">
        {/* Logo Section */}
        <div className="p-5 border-b border-gray-100">
          <img src="/image.png" alt="Logo" className="h-12" />
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-2.5 py-4">
          <nav className="space-y-1">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `flex items-center p-2.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-500"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <Home className="h-5 w-5" />
              <span className="ml-2.5 text-sm">Dashboard</span>
            </NavLink>

            {/* Services Dropdown */}
{/* Services Dropdown */}
<div className="space-y-1">
  <button
    onClick={() => setIsServicesOpen(!isServicesOpen)}
    className="w-full flex items-center justify-between p-2.5 rounded-lg text-gray-800 hover:bg-gray-200"
  >
    <div className="flex items-center">
      <Layers className="h-5 w-5" />
      <span className="ml-2.5 text-sm">Services</span>
    </div>
    <ChevronDown className={`h-4 w-4 ${isServicesOpen ? "rotate-180" : ""}`} />
  </button>

  {isServicesOpen && (
    <div className="ml-6 space-y-1">
      <NavLink
        to="/admin/services/create"
        className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-300"
      >
        <PlusCircle className="h-4 w-4" />
        <span className="ml-2.5 text-sm">Add Service</span>
      </NavLink>

      <NavLink
        to="/admin/services"
        className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-300"
      >
        <Eye className="h-4 w-4" />
        <span className="ml-2.5 text-sm">View Services</span>
      </NavLink>
    </div>
  )}
</div>
          </nav>
        </div>

        {/* Fixed Admin Panel */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-3 py-3">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center">
              <span className="text-xs font-medium text-white">AD</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Admin</p>
              <p className="text-xs text-gray-500">admin@gmail.com</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center px-2.5 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {/* Dynamic Header */}
        <div className="bg-gray-50 px-6 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                {/* <h1 className="text-xl font-semibold text-gray-800">
                  {pageTitles[pathnames[pathnames.length - 1]] || 'Dashboard'}
                </h1> */}
                <nav className="flex space-x-1 text-sm text-gray-500 mt-1">
                  {pathnames.map((path, index) => (
                    <span key={path} className="flex items-center">
                      <span className="lowercase">
                        {pageTitles[path] || path}
                      </span>
                      {index < pathnames.length - 1 && (
                        <span className="mx-1">/</span>
                      )}
                    </span>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-2">
          <div className="max-w-7xl mx-autop-">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;