import React from 'react';
import { Brain, Activity, Cpu, Network, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Quantum AI</h1>
      </div>
      <nav className="mt-6">
        <div className="px-6 space-y-4">
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
            <Brain className="w-5 h-5" />
            <span>Neural Networks</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
            <Activity className="w-5 h-5" />
            <span>Performance</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
            <Cpu className="w-5 h-5" />
            <span>Quantum State</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
            <Network className="w-5 h-5" />
            <span>5D Mindmap</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;