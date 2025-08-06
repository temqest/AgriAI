"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
import SoilStatusIndicator from '@/components/SoilStatusIndicator';
import ForecastCard from '@/components/ForecastCard';
import { Cloud, Droplets, Thermometer, Wind, Gauge } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data
const weatherForecast = [
  {
    date: 'Today',
    temperature: { high: 28, low: 22 },
    condition: 'sunny' as const,
    humidity: 75,
    rainfall: 5
  },
  {
    date: 'Tomorrow',
    temperature: { high: 30, low: 24 },
    condition: 'cloudy' as const,
    humidity: 70,
    rainfall: 0
  },
  {
    date: 'Wed',
    temperature: { high: 27, low: 21 },
    condition: 'rainy' as const,
    humidity: 85,
    rainfall: 15
  },
  {
    date: 'Thu',
    temperature: { high: 25, low: 19 },
    condition: 'rainy' as const,
    humidity: 90,
    rainfall: 20
  }
];

const soilReadings = {
  moisture: 65,
  temperature: 24,
  ph: 6.8
};

const sensorData = [
  { name: 'Field A', moisture: 68, temperature: 25, ph: 6.5 },
  { name: 'Field B', moisture: 72, temperature: 23, ph: 7.2 },
  { name: 'Field C', moisture: 61, temperature: 26, ph: 6.8 }
];

export default function MonitorPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Soil & Weather Monitor</h1>
          <p className="text-gray-600 mt-2">Real-time soil conditions and weather monitoring</p>
        </div>

        {/* Current Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Current Temperature"
            value="24°C"
            icon={<Thermometer className="h-6 w-6" />}
            trend={{ value: 2, isPositive: true }}
          />
          <DashboardCard
            title="Soil Moisture"
            value="65%"
            icon={<Droplets className="h-6 w-6" />}
            trend={{ value: 5, isPositive: true }}
          />
          <DashboardCard
            title="Humidity"
            value="75%"
            icon={<Cloud className="h-6 w-6" />}
            trend={{ value: 3, isPositive: false }}
          />
          <DashboardCard
            title="Wind Speed"
            value="15 km/h"
            icon={<Wind className="h-6 w-6" />}
            trend={{ value: 8, isPositive: false }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Soil Status */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Soil Status</h3>
            <SoilStatusIndicator
              moisture={soilReadings.moisture}
              temperature={soilReadings.temperature}
              ph={soilReadings.ph}
            />
          </div>

          {/* Weather Forecast */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weather Forecast</h3>
            <div className="grid grid-cols-2 gap-4">
              {weatherForecast.map((forecast) => (
                <ForecastCard
                  key={forecast.date}
                  date={forecast.date}
                  temperature={forecast.temperature}
                  condition={forecast.condition}
                  humidity={forecast.humidity}
                  rainfall={forecast.rainfall}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sensor Readings */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Field Sensor Readings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sensorData.map((field) => (
              <div key={field.name} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900">{field.name}</h4>
                  <Badge variant="outline">Active</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600">Moisture</span>
                    </div>
                    <span className="text-sm font-medium">{field.moisture}%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-gray-600">Temperature</span>
                    </div>
                    <span className="text-sm font-medium">{field.temperature}°C</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Gauge className="h-4 w-4 text-purple-500" />
                      <span className="text-sm text-gray-600">pH Level</span>
                    </div>
                    <span className="text-sm font-medium">{field.ph}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts and Notifications */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
              <div className="h-2 w-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Low Soil Moisture Alert</p>
                <p className="text-sm text-gray-600">Field C moisture level is below optimal range. Consider irrigation.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Weather Warning</p>
                <p className="text-sm text-gray-600">Heavy rainfall expected in the next 24 hours. Prepare drainage systems.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Optimal Conditions</p>
                <p className="text-sm text-gray-600">Field A soil conditions are optimal for planting rice.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Data */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Historical Trends</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Temperature Trend</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Last Week</span>
                  <span>26°C</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>This Week</span>
                  <span>24°C</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>Change</span>
                  <span>-2°C</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Moisture Trend</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Last Week</span>
                  <span>58%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>This Week</span>
                  <span>65%</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>Change</span>
                  <span>+7%</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">pH Level Trend</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Last Week</span>
                  <span>6.5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>This Week</span>
                  <span>6.8</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>Change</span>
                  <span>+0.3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 