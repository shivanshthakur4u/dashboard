import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Direct', value: 50 },
  { name: 'Referral', value: 30 },
  { name: 'Organic', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const TrafficChart: React.FC = () => {
  return (
    <div className="traffic-chart">
      <h3>Traffic Channel</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <style jsx>{`
        .traffic-chart {
          padding: 20px;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default TrafficChart;