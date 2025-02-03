import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { time: '00:00', performance: 85 },
  { time: '04:00', performance: 88 },
  { time: '08:00', performance: 92 },
  { time: '12:00', performance: 90 },
  { time: '16:00', performance: 95 },
  { time: '20:00', performance: 89 },
  { time: '24:00', performance: 91 }
];

const PerformanceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="performance"
          stroke="#4F46E5"
          strokeWidth={2}
          dot={{ fill: '#4F46E5' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;