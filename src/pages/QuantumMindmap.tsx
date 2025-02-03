import React from 'react';
import { motion } from 'framer-motion';
import QuantumMindmapViewer from '../components/QuantumMindmapViewer';

const QuantumMindmap = () => {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h1 className="text-2xl font-bold mb-4">5D Quantum Mindmap Explorer</h1>
        <p className="text-gray-600 mb-6">
          Visualize and explore quantum relationships across multiple dimensions.
          Use the interactive controls to navigate through the quantum mindmap.
        </p>
        <div className="h-[600px] w-full">
          <QuantumMindmapViewer />
        </div>
      </motion.div>
    </div>
  );
};

export default QuantumMindmap;