import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StepsComparisonChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cowSteps" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="herdSteps" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default StepsComparisonChart;