import React, { useContext, useState } from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  Bell, 
  LogOut
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
      <>
        <button 
          onClick={() => setActiveSection('create')} 
          className="w-full text-left p-2 hover:bg-gray-200 rounded-md text-sm text-gray-600"
        >
          Create
        </button>
        <button 
          onClick={() => setActiveSection('show')} 
          className="w-full text-left p-2 hover:bg-gray-200 rounded-md text-sm text-gray-600"
        >
          Show
        </button>
      </>
    ),
    show: <Show />,
    create: <Create />,
    settings: <h2 className="text-sm font-medium text-gray-800">Settings</h2>,
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Fixed Sidebar */}
      <div className="bg-white border-r border-gray-200 w-48 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <img src="/image.png" alt="Logo" className="h-12" />
        </div>
        
        {/* Main Navigation */}
        <nav className="mt-4 space-y-1 px-2 flex-1">
          <button 
            onClick={() => setActiveSection('dashboard')} 
            className={`flex items-center p-2 rounded-md w-full ${
              activeSection === 'dashboard' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Home className="h-4 w-4" />
            <span className="ml-3 text-sm">Dashboard</span>
          </button>
          
          {/* Services Section */}
          <div>
            <button 
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)} 
              className={`flex items-center p-2 rounded-md w-full ${
                isServicesDropdownOpen 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Users className="h-4 w-4" />
              <span className="ml-3 text-sm">Services</span>
            </button>
            {isServicesDropdownOpen && (
              <div className="ml-6 mt-1 space-y-1">
                {sections.services}
              </div>
            )}
          </div>

          <button 
            onClick={() => setActiveSection('settings')} 
            className={`flex items-center p-2 rounded-md w-full ${
              activeSection === 'settings' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Settings className="h-4 w-4" />
            <span className="ml-3 text-sm">Settings</span>
          </button>
        
          <button 
            className={`flex items-center p-2 rounded-md w-full ${
              activeSection === 'notifications' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Bell className="h-4 w-4" />
            <span className="ml-3 text-sm">Notifications</span>
          </button>
        </nav>

        {/* Admin Section Inside Sidebar */}
        <div className="border-t border-gray-200 p-3">
          <div className="flex items-center space-x-3 mb-3">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-xs text-gray-600">AD</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Admin Name</p>
              <p className="text-xs text-gray-500">admin@example.com</p>
            </div>
          </div>
          <button 
            onClick={logout} 
            className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-200 rounded-md text-sm"
          >
            <LogOut className="h-4 w-4" />
            <span className="ml-3">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* <header className="bg-white border-b border-gray-200 p-4">
          <h1 className="text-sm font-semibold text-gray-800">
            {activeSection === 'dashboard' ? 'Overview' : activeSection}
          </h1>
        </header> */}

        <main className="flex-1 bg-gray-50 p-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            {sections[activeSection]}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;