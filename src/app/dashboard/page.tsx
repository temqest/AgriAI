"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
import { AlertTriangle, Droplets, Leaf, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data
const recentActivities = [
  { id: 1, action: 'Planted rice seeds', time: '2 hours ago', type: 'planting' },
  { id: 2, action: 'Applied fertilizer', time: '1 day ago', type: 'fertilizer' },
  { id: 3, action: 'Irrigation system activated', time: '2 days ago', type: 'irrigation' },
  { id: 4, action: 'Soil test completed', time: '3 days ago', type: 'testing' },
];

export default function DashboardHome() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your farm today.</p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            title="Drought Risk Level"
            description="Current risk assessment"
            value="Low"
            icon={<AlertTriangle className="h-6 w-6" />}
            className="border-l-4 border-l-green-500"
          />
          
          <DashboardCard
            title="Optimal Crop Suggestion"
            description="Based on current conditions"
            value="Rice"
            icon={<Leaf className="h-6 w-6" />}
            className="border-l-4 border-l-blue-500"
          />
          
          <DashboardCard
            title="Soil Moisture Status"
            description="Current moisture level"
            value="65%"
            icon={<Droplets className="h-6 w-6" />}
            trend={{ value: 5, isPositive: true }}
            className="border-l-4 border-l-blue-500"
          />
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Farming Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Crops</span>
                <span className="text-lg font-bold text-gray-900">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Alerts</span>
                <span className="text-lg font-bold text-red-600">2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">This Month's Yield</span>
                <span className="text-lg font-bold text-gray-900">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Next Harvest</span>
                <span className="text-lg font-bold text-gray-900">15 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weather Summary */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Weather Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">28°C</div>
              <div className="text-sm text-gray-600">Temperature</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">75%</div>
              <div className="text-sm text-gray-600">Humidity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5mm</div>
              <div className="text-sm text-gray-600">Rainfall</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">15km/h</div>
              <div className="text-sm text-gray-600">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}