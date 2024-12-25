import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Mail, 
  Users, 
  FileText, 
  BarChart, 
  Settings,
  HelpCircle 
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/campaigns', icon: Mail, label: 'Campaigns' },
    { to: '/contacts', icon: Users, label: 'Contacts' },
    { to: '/pages', icon: FileText, label: 'Landing Pages' },
    { to: '/analytics', icon: BarChart, label: 'Analytics' },
    { to: '/settings', icon: Settings, label: 'Settings' },
    { to: '/guide', icon: HelpCircle, label: 'Guide' }
  ];

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">EmailCRM</h1>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 ${
                isActive ? 'bg-gray-50 border-r-4 border-blue-500' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;