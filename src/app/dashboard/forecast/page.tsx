"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
import WeatherChart from '@/components/WeatherChart';
import { BarChart3, CloudRain, TrendingUp, Thermometer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock data for charts
const weatherData = [
  { day: 'Mon', temperature: 28, humidity: 75, rainfall: 5 },
  { day: 'Tue', temperature: 30, humidity: 70, rainfall: 0 },
  { day: 'Wed', temperature: 27, humidity: 80, rainfall: 15 },
  { day: 'Thu', temperature: 25, humidity: 85, rainfall: 20 },
  { day: 'Fri', temperature: 29, humidity: 72, rainfall: 2 },
  { day: 'Sat', temperature: 31, humidity: 68, rainfall: 0 },
  { day: 'Sun', temperature: 26, humidity: 78, rainfall: 8 },
];

const cropGrowthData = [
  { crop: 'Rice', success: 85, growth: 75 },
  { crop: 'Corn', success: 92, growth: 88 },
  { crop: 'Wheat', success: 78, growth: 70 },
  { crop: 'Soybeans', success: 88, growth: 82 },
];

export default function ForecastPage() {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedTimeRange, setSelectedTimeRange] = useState('7 Days');

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Forecast & Analytics</h1>
            <p className="text-gray-600 mt-2">Weather predictions and crop performance analytics</p>
          </div>
          
          {/* Filters */}
          <div className="flex items-center space-x-4">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option>All Locations</option>
              <option>Field A</option>
              <option>Field B</option>
              <option>Field C</option>
            </select>
            
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option>7 Days</option>
              <option>14 Days</option>
              <option>30 Days</option>
            </select>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Weekly Rainfall"
            description="Predicted rainfall"
            value="45mm"
            icon={<CloudRain className="h-6 w-6" />}
            trend={{ value: 12, isPositive: true }}
          />
          
          <DashboardCard
            title="Average Temperature"
            description="Next 7 days"
            value="28°C"
            icon={<Thermometer className="h-6 w-6" />}
            trend={{ value: 3, isPositive: false }}
          />
          
          <DashboardCard
            title="Crop Success Rate"
            description="Predicted yield"
            value="87%"
            icon={<TrendingUp className="h-6 w-6" />}
            trend={{ value: 5, isPositive: true }}
          />
          
          <DashboardCard
            title="Soil Moisture Trend"
            description="Weekly average"
            value="72%"
            icon={<BarChart3 className="h-6 w-6" />}
            trend={{ value: 8, isPositive: true }}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weather Chart */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weather Trends</h3>
            <WeatherChart data={weatherData} />
          </div>

          {/* Crop Performance */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Crop Performance</h3>
            <div className="space-y-4">
              {cropGrowthData.map((crop) => (
                <div key={crop.crop} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{crop.crop}</span>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{crop.success}% Success</Badge>
                      <Badge variant="outline">{crop.growth}% Growth</Badge>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${crop.success}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Analytics */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Analytics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Rainfall Prediction</h4>
              <p className="text-sm text-gray-600">
                Expected rainfall for the next week shows a 60% chance of precipitation 
                with an average of 6.4mm per day. This is optimal for rice cultivation.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Temperature Analysis</h4>
              <p className="text-sm text-gray-600">
                Temperature will remain stable around 28°C with minimal fluctuations. 
                This creates ideal growing conditions for most crops.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Yield Prediction</h4>
              <p className="text-sm text-gray-600">
                Based on current conditions and historical data, expected yield is 
                87% with a 5% improvement from last season.
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommendations</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Optimal Planting Time</p>
                <p className="text-sm text-gray-600">Consider planting rice seeds in the next 3-5 days for optimal growth conditions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Irrigation Schedule</p>
                <p className="text-sm text-gray-600">Reduce irrigation frequency by 20% due to expected rainfall.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Fertilizer Application</p>
                <p className="text-sm text-gray-600">Apply nitrogen-based fertilizer after the next rainfall for better absorption.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 