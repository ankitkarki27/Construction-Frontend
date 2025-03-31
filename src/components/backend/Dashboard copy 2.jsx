import React, { useContext, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "./context/Auth";
import { 
  Home, LogOut, PlusCircle, Eye, ChevronDown, ChevronUp, PencilLine, 
  Quote, MessageCircle, Users, UserCheck, Shield, Server, Package, 
  Bell, Zap, Database, File, Cloud, ClipboardCheck, Layers, Settings 
} from "lucide-react";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(false);
  const location = useLocation();

  // Extract pathname
  const pathnames = location.pathname.split('/').filter(x => x);

  // Page title configuration
  const pageTitles = {
    'admin': 'Dashboard',
    'services': 'Services',
    'services/create': 'Add Service',
    'projects': 'Projects',
    'projects/create': 'Add Projects',
    'blogs': 'Blogs',
    'blogs/create': 'Add Blogs',
    'testimonials': 'Testimonials',
    'testimonials/create': 'Add Testimonials',
  };

  // Toggle dropdown functions
  const toggleDropdown = (setter, currentState) => {
    setter(!currentState);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="bg-white w-64 flex flex-col h-full border-r border-gray-200 shadow-sm relative transition-all duration-300">
        {/* Logo section */}
        <div className="p-5 border-b border-gray-100 flex justify-center items-center">
          <img src="/image.png" alt="Logo" className="h-12" />
        </div>

        {/* Navigation links */}
        <div className="flex-1 overflow-y-auto px-3 py-6">
          <nav className="space-y-2">
            {/* Dashboard link */}
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `flex items-center p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 font-medium shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <Home className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Dashboard</span>
            </NavLink>

            {/* Services Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown(setIsServicesOpen, isServicesOpen)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  location.pathname.includes('/admin/services') 
                    ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 font-medium" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <Layers className="h-5 w-5" />
                  <span className="ml-3 text-sm font-medium">Services</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? "max-h-24" : "max-h-0"}`}>
                <div className="ml-7 space-y-1 pt-1">
                  <NavLink
                    to="/admin/services/create"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                    }
                  >
                    <PlusCircle className="h-4 w-4" />
                    <span className="ml-2 text-sm">Add Service</span>
                  </NavLink>

                  <NavLink
                    to="/admin/services"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                    }
                  >
                    <Eye className="h-4 w-4" />
                    <span className="ml-2 text-sm">View Services</span>
                  </NavLink>
                </div>
              </div>
            </div>
  
            {/* Projects Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown(setIsProjectsOpen, isProjectsOpen)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  location.pathname.includes('/admin/projects') 
                    ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 font-medium" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <ClipboardCheck className="h-5 w-5" />
                  <span className="ml-3 text-sm font-medium">Projects</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProjectsOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isProjectsOpen ? "max-h-24" : "max-h-0"}`}>
                <div className="ml-7 space-y-1 pt-1">
                  <NavLink
                    to="/admin/projects/create"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                    }
                  >
                    <PlusCircle className="h-4 w-4" />
                    <span className="ml-2 text-sm">Add Project</span>
                  </NavLink>

                  <NavLink
                    to="/admin/projects/"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                    }
                  >
                    <Eye className="h-4 w-4" />
                    <span className="ml-2 text-sm">View Projects</span>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Blogs Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown(setIsBlogsOpen, isBlogsOpen)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  location.pathname.includes('/admin/blogs') 
                    ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 font-medium" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <PencilLine className="h-5 w-5" />
                  <span className="ml-3 text-sm font-medium">Blogs</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isBlogsOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isBlogsOpen ? "max-h-24" : "max-h-0"}`}>
                <div className="ml-7 space-y-1 pt-1">
                  <NavLink
                    to="/admin/blogs/create"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                    }
                  >
                    <PlusCircle className="h-4 w-4" />
                    <span className="ml-2 text-sm">Add Blog</span>
                  </NavLink>

                  <NavLink
                    to="/admin/blogs/"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                    }
                  >
                    <Eye className="h-4 w-4" />
                    <span className="ml-2 text-sm">View Blogs</span>
                  </NavLink>
                </div>
              </div>
            </div>
          
            {/* Testimonials Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown(setIsTestimonialsOpen, isTestimonialsOpen)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  location.pathname.includes('/admin/testimonials') 
                    ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 font-medium" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5" />
                  <span className="ml-3 text-sm font-medium">Testimonials</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isTestimonialsOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isTestimonialsOpen ? "max-h-24" : "max-h-0"}`}>
                <div className="ml-7 space-y-1 pt-1">
                  <NavLink
                    to="/admin/testimonials/create"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                    }
                  >
                    <PlusCircle className="h-4 w-4" />
                    <span className="ml-2 text-sm">Add Testimonial</span>
                  </NavLink>

                  <NavLink
                    to="/admin/testimonials/"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                    }
                  >
                    <Eye className="h-4 w-4" />
                    <span className="ml-2 text-sm">View Testimonials</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Admin Profile Panel */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <div className="flex items-center gap-3 mb-3 bg-blue-50 p-3 rounded-xl">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-sm">
              <span className="text-sm font-medium text-white">AD</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Admin</p>
              <p className="text-xs text-gray-500">admin@gmail.com</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors bg-gray-100"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
        
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {/* Dynamic Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                {/* <h1 className="text-xl font-semibold text-gray-800">
                  {pageTitles[pathnames[pathnames.length - 1]] || pathnames[pathnames.length - 1]}
                </h1> */}
                <nav className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                  <span className="text-blue-600">Admin</span>
                  {pathnames.length > 0 && <span className="mx-1">/</span>}
                  {pathnames.map((path, index) => (
                    <span key={path} className="flex items-center">
                      <span className={index === pathnames.length - 1 ? "text-gray-700" : "text-gray-400"}>
                        {pageTitles[path] || path}
                      </span>
                      {index < pathnames.length - 1 && <span className="mx-1">/</span>}
                    </span>
                  ))}
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                  <Bell className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                  <Settings className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        {/* <div className="p-6">
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6">
            <Outlet />
          </div>
        </div> */}

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