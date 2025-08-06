"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
import { Calendar, Clock, Leaf, Sprout, Wheat } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data
const upcomingPlanting = [
  {
    id: 1,
    crop: 'Rice',
    date: '2024-01-15',
    status: 'scheduled',
    progress: 0,
    field: 'Field A',
    notes: 'Optimal planting conditions expected'
  },
  {
    id: 2,
    crop: 'Corn',
    date: '2024-01-20',
    status: 'preparing',
    progress: 25,
    field: 'Field B',
    notes: 'Soil preparation in progress'
  },
  {
    id: 3,
    crop: 'Wheat',
    date: '2024-01-25',
    status: 'scheduled',
    progress: 0,
    field: 'Field C',
    notes: 'Waiting for optimal weather'
  }
];

const suggestedCrops = [
  {
    name: 'Rice',
    suitability: 95,
    reason: 'Optimal soil moisture and temperature',
    season: 'Wet Season',
    duration: '120 days'
  },
  {
    name: 'Corn',
    suitability: 88,
    reason: 'Good soil conditions, moderate rainfall expected',
    season: 'Wet Season',
    duration: '90 days'
  },
  {
    name: 'Soybeans',
    suitability: 82,
    reason: 'Suitable pH levels, moderate temperature',
    season: 'Wet Season',
    duration: '100 days'
  }
];

const fertilizerPlan = [
  {
    crop: 'Rice',
    type: 'Nitrogen-based',
    application: 'Before planting',
    amount: '50kg/ha',
    status: 'pending'
  },
  {
    crop: 'Corn',
    type: 'Phosphorus-based',
    application: 'During growth',
    amount: '30kg/ha',
    status: 'scheduled'
  }
];

const harvestTimeline = [
  {
    crop: 'Rice',
    plantedDate: '2024-01-15',
    expectedHarvest: '2024-05-15',
    daysRemaining: 45,
    progress: 75
  },
  {
    crop: 'Corn',
    plantedDate: '2024-01-20',
    expectedHarvest: '2024-04-20',
    daysRemaining: 30,
    progress: 85
  }
];

export default function CropPlannerPage() {
  const [selectedTab, setSelectedTab] = useState('suggested');

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Crop Planner</h1>
          <p className="text-gray-600 mt-2">Plan your planting schedule and manage crop cycles</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DashboardCard
            title="Active Crops"
            value="8"
            icon={<Leaf className="h-6 w-6" />}
          />
          <DashboardCard
            title="Next Planting"
            value="3 days"
            icon={<Sprout className="h-6 w-6" />}
          />
          <DashboardCard
            title="Upcoming Harvest"
            value="15 days"
            icon={<Wheat className="h-6 w-6" />}
          />
          <DashboardCard
            title="Field Utilization"
            value="85%"
            icon={<Calendar className="h-6 w-6" />}
          />
        </div>

        {/* Planting Calendar */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Planting Schedule</h3>
          <div className="space-y-4">
            {upcomingPlanting.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.crop}</h4>
                      <p className="text-sm text-gray-500">{item.field}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{item.date}</p>
                    <Badge 
                      variant={item.status === 'scheduled' ? 'outline' : 'default'}
                      className="text-xs"
                    >
                      {item.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                  <p className="text-xs text-gray-600">{item.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="suggested">Suggested Crops</TabsTrigger>
              <TabsTrigger value="fertilizer">Fertilizer Plan</TabsTrigger>
              <TabsTrigger value="harvest">Harvest Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="suggested" className="mt-6">
              <div className="space-y-4">
                {suggestedCrops.map((crop) => (
                  <div key={crop.name} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">{crop.name}</h4>
                        <p className="text-sm text-gray-600">{crop.reason}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{crop.suitability}%</div>
                        <Badge variant="outline" className="text-xs">
                          {crop.season}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Growth Duration: {crop.duration}</span>
                      <span>Suitability Score</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${crop.suitability}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fertilizer" className="mt-6">
              <div className="space-y-4">
                {fertilizerPlan.map((plan, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">{plan.crop}</h4>
                        <p className="text-sm text-gray-600">{plan.type}</p>
                      </div>
                      <Badge 
                        variant={plan.status === 'pending' ? 'outline' : 'default'}
                        className="text-xs"
                      >
                        {plan.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Application:</span>
                        <p className="font-medium">{plan.application}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Amount:</span>
                        <p className="font-medium">{plan.amount}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="harvest" className="mt-6">
              <div className="space-y-4">
                {harvestTimeline.map((harvest) => (
                  <div key={harvest.crop} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">{harvest.crop}</h4>
                        <p className="text-sm text-gray-600">
                          Planted: {harvest.plantedDate} | Harvest: {harvest.expectedHarvest}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{harvest.daysRemaining} days</div>
                        <Badge variant="outline" className="text-xs">
                          {harvest.progress}% Complete
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Growth Progress</span>
                        <span>{harvest.progress}%</span>
                      </div>
                      <Progress value={harvest.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* AI Recommendations */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommendations</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Optimal Planting Window</p>
                <p className="text-sm text-gray-600">Plant rice in Field A between Jan 15-20 for best yield potential.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Fertilizer Timing</p>
                <p className="text-sm text-gray-600">Apply nitrogen fertilizer 2 weeks after planting for optimal absorption.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Crop Rotation</p>
                <p className="text-sm text-gray-600">Consider planting legumes in Field B after corn harvest to improve soil health.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 