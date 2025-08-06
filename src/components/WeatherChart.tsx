import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface WeatherData {
  day: string;
  temperature: number;
  humidity: number;
  rainfall: number;
}

interface WeatherChartProps {
  data: WeatherData[];
  className?: string;
}

export default function WeatherChart({ data, className }: WeatherChartProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="temperature" 
            stroke="#ef4444" 
            strokeWidth={2}
            name="Temperature (°C)"
          />
          <Line 
            type="monotone" 
            dataKey="humidity" 
            stroke="#3b82f6" 
            strokeWidth={2}
            name="Humidity (%)"
          />
          <Line 
            type="monotone" 
            dataKey="rainfall" 
            stroke="#10b981" 
            strokeWidth={2}
            name="Rainfall (mm)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 