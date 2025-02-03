import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  period: string;
}

const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, change, period }) => {
  const isPositive = change.startsWith('+');

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className={`ml-2 flex items-center text-sm ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownRight className="w-4 h-4 mr-1" />
          )}
          {change}
        </p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{period}</p>
    </motion.div>
  );
};

export default MetricsCard;