import React from 'react';
import { motion } from 'framer-motion';
import MetricsCard from '../components/MetricsCard';
import QuantumVisualization from '../components/QuantumVisualization';
import PerformanceChart from '../components/PerformanceChart';

const Dashboard = () => {
  return (
    <div className="p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <MetricsCard
          title="Quantum Coherence"
          value="99.9%"
          change="+2.1%"
          period="from last week"
        />
        <MetricsCard
          title="System Performance"
          value="92.3%"
          change="+1.2%"
          period="from last week"
        />
        <MetricsCard
          title="Neural Stability"
          value="95.1%"
          change="+3.4%"
          period="from last week"
        />
        <MetricsCard
          title="Processing Power"
          value="78.4 TFLOPS"
          change="-0.8%"
          period="from last hour"
        />
      </motion.div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">5D Quantum Mindmap</h2>
          <QuantumVisualization />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">System Performance</h2>
          <PerformanceChart />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;