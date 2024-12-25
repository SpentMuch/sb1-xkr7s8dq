import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Mail, Users, MousePointer, FileText } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    { icon: Mail, label: 'Campaigns', value: '12', color: 'bg-blue-100 text-blue-600' },
    { icon: Users, label: 'Subscribers', value: '1,234', color: 'bg-green-100 text-green-600' },
    { icon: MousePointer, label: 'Click Rate', value: '24%', color: 'bg-purple-100 text-purple-600' },
    { icon: FileText, label: 'Landing Pages', value: '8', color: 'bg-orange-100 text-orange-600' },
  ];

  const chartData = [
    { name: 'Mon', opens: 120, clicks: 45 },
    { name: 'Tue', opens: 150, clicks: 60 },
    { name: 'Wed', opens: 180, clicks: 75 },
    { name: 'Thu', opens: 140, clicks: 55 },
    { name: 'Fri', opens: 160, clicks: 65 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((Stat) => (
          <div key={Stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className={`inline-flex p-3 rounded-lg ${Stat.color}`}>
              <Stat.icon className="w-6 h-6" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold">{Stat.value}</h3>
            <p className="text-gray-600">{Stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Email Performance</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="opens" fill="#3B82F6" name="Opens" />
              <Bar dataKey="clicks" fill="#10B981" name="Clicks" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;