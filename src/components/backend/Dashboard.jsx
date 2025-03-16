import React, { useContext, useState } from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  Bell, 
  LogOut,
  ChevronDown,
  PlusCircle,
  Eye,
  ChevronRight
} from 'lucide-react';
import { AuthContext } from './context/Auth';
import Show from './services/show';
import Create from './services/Create';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const sections = {
    dashboard: <p className="text-gray-500 text-sm">Dashboard goes here</p>,
    services: (
      <div className="space-y-1 py-2">
        <button 
          onClick={() => setActiveSection('create')} 
          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-sm text-gray-600 flex items-center transition-colors"
        >
          {/* <div className="w-1 h-1 rounded-full bg-gray-400 mr-2"></div> */}
          <PlusCircle className="h-5 w-5 mr-2" /> 
          Add Services
        </button>
        <button 
          onClick={() => setActiveSection('show')} 
          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-sm text-gray-600 flex items-center transition-colors"
        >
          {/* <div className="w-1 h-1 rounded-full bg-gray-400 mr-2"></div> */}
          <Eye className="h-5 w-5 mr-2" /> 
          Show Services
        </button>
      </div>
    ),
    show: <Show />,
    create: <Create />,
    settings: <h2 className="text-sm font-medium text-gray-800">Settings</h2>,
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white shadow-sm w-48 flex flex-col h-full">
        {/* Logo Section */}
        <div className="p-5 border-b border-gray-100">
          <img src="/image.png" alt="Logo" className="h-10" />
        </div>
        
        {/* Navigation Section - With Overflow */}
        <div className="flex-1 overflow-y-auto">
          <nav className="mt-6 px-3 space-y-1">
            <button 
              onClick={() => setActiveSection('dashboard')} 
              className={`flex items-center p-3 rounded-lg w-full transition-colors ${
                activeSection === 'dashboard' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Home className="h-5 w-5" />
              <span className="ml-3 text-sm">Dashboard</span>
            </button>
            
            {/* Services Section */}
            <div>
              <button 
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)} 
                className={`flex items-center justify-between p-3 rounded-lg w-full transition-colors ${
                  (isServicesDropdownOpen || activeSection === 'show' || activeSection === 'create') 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <Users className="h-5 w-5" />
                  <span className="ml-3 text-sm">Services</span>
                </div>
                {isServicesDropdownOpen ? 
                  <ChevronDown className="h-4 w-4" /> : 
                  <ChevronRight className="h-4 w-4" />
                }
              </button>
              {isServicesDropdownOpen && (
                <div className="ml-4 mt-1">
                  {sections.services}
                </div>
              )}
            </div>

            <button 
              onClick={() => setActiveSection('settings')} 
              className={`flex items-center p-3 rounded-lg w-full transition-colors ${
                activeSection === 'settings' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Settings className="h-5 w-5" />
              <span className="ml-3 text-sm">Settings</span>
            </button>
          
            <button 
              className={`flex items-center p-3 rounded-lg w-full transition-colors ${
                activeSection === 'notifications' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Bell className="h-5 w-5" />
              <span className="ml-3 text-sm">Notifications</span>
              {/* <span className="ml-auto bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">3</span> */}
            </button>
          </nav>
        </div>

        {/* Admin Section - Fixed at Bottom */}
        <div className="border-t border-gray-100 p-4 bg-white">
          <div className="flex items-center space-x-3 mb-3">
            <div className="h-8 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-sm font-medium text-blue-700">AD</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Admin</p>
              <p className="text-xs text-gray-500">admin@gmail.com</p>
            </div>
          </div>
          <button 
            onClick={logout} 
            className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-100 rounded-md text-sm transition-colors mt-2"
          >
            <LogOut className="h-4 w-4" />
            <span className="ml-3">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-2 flex flex-col">
        {/* Header */}
          <header className="bg-white rounded-lg shadow-lg p-2 mt-2 mx-4 flex items-center justify-between">
          <h1 className="text-l px-2 font-medium text-gray-800 capitalize">
            {activeSection === 'dashboard' 
              ? 'Dashboard' 
              : activeSection === 'show' 
              ? 'Show Services' 
              : activeSection === 'create' 
              ? 'Add Services' 
              : activeSection}
          </h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
              <Bell className="h-5 w-5" />
            </button>
          </div>
        </header>


        {/* Main Content */}
        <main className="flex-1 p-1 overflow-auto">
          <div className="p-2">
            {sections[activeSection]}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;