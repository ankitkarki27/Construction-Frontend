import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  BarChart2, 
  Bell, 
  Search,
  Mail,
  Calendar,
  HelpCircle,
  LogOut,
  Menu
} from 'lucide-react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sections = {
    dashboard: 
    <h2 className="text-2xl font-bold">Dashboard Content</h2>,
    users: <h2 className="text-2xl font-bold">Users Management</h2>,
    analytics: <h2 className="text-2xl font-bold">Analytics Overview</h2>,
    settings: <h2 className="text-2xl font-bold">Settings</h2>,
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-zinc-900 text-white transition-transform ${isSidebarOpen ? 'w-64' : 'w-16'} duration-300`}>
        <div className="p-4 flex items-center justify-between">
          <h2 className={`text-2xl font-bold transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
            {/* <div className="flex justify-center mb-8"> */}
            <img src="/image2.png" alt="Logo" className="h-12" />
          {/* </div> */}
          </h2>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-6 space-y-2">
          <button onClick={() => setActiveSection('dashboard')} className="flex items-center p-3 bg-zinc-800 rounded-lg w-full">
            <Home className="h-5 w-5 mr-3" />{isSidebarOpen && 'Dashboard'}
          </button>
          <button onClick={() => setActiveSection('users')} className="flex items-center p-3 hover:bg-zinc-800 rounded-lg w-full">
            <Users className="h-5 w-5 mr-3" />{isSidebarOpen && 'Users'}
          </button>
          <button onClick={() => setActiveSection('analytics')} className="flex items-center p-3 hover:bg-zinc-800 rounded-lg w-full">
            <BarChart2 className="h-5 w-5 mr-3" />{isSidebarOpen && 'Analytics'}
          </button>
          <button onClick={() => setActiveSection('settings')} className="flex items-center p-3 hover:bg-zinc-800 rounded-lg w-full">
            <Settings className="h-5 w-5 mr-3" />{isSidebarOpen && 'Settings'}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <Search className="h-5 w-5 text-gray-500" />
            <input type="text" placeholder="Search..." className="ml-2 bg-transparent focus:outline-none" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            <div className="w-8 h-8 bg-zinc-900 rounded-full"></div>
          </div>
        </header>

        <main className="p-6">
          {sections[activeSection]}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
