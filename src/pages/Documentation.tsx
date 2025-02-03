import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Terminal } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h1 className="text-2xl font-bold mb-4">Documentation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 border rounded-lg">
            <Book className="w-8 h-8 text-blue-600 mb-2" />
            <h2 className="text-lg font-semibold mb-2">Getting Started</h2>
            <p className="text-gray-600">
              Learn the basics of quantum computing and our platform.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <Code className="w-8 h-8 text-green-600 mb-2" />
            <h2 className="text-lg font-semibold mb-2">API Reference</h2>
            <p className="text-gray-600">
              Detailed documentation of our quantum computing APIs.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <Terminal className="w-8 h-8 text-yellow-600 mb-2" />
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <p className="text-gray-600">
              Sample code and tutorials for common use cases.
            </p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Quick Start Guide</h2>
          <p>
            Get started with our quantum computing platform by following these steps:
          </p>
          <ul>
            <li>Set up your development environment</li>
            <li>Create your first quantum circuit</li>
            <li>Run quantum simulations</li>
            <li>Analyze results and visualizations</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Documentation;