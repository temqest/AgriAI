"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
import { ShoppingCart, Package, Truck, Store } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Mock marketplace data
const marketplaceProducts = [
  {
    id: 1,
    name: 'Organic Fertilizer',
    description: 'High-quality organic fertilizer for all crop types',
    price: '₱1,200',
    category: 'Fertilizers',
    status: 'coming-soon'
  },
  {
    id: 2,
    name: 'Smart Irrigation System',
    description: 'Automated irrigation system with soil sensors',
    price: '₱15,000',
    category: 'Equipment',
    status: 'coming-soon'
  },
  {
    id: 3,
    name: 'Seed Variety Pack',
    description: 'Premium seed collection for rice and corn',
    price: '₱800',
    category: 'Seeds',
    status: 'coming-soon'
  },
  {
    id: 4,
    name: 'Soil Testing Kit',
    description: 'Complete soil analysis kit for farmers',
    price: '₱2,500',
    category: 'Tools',
    status: 'coming-soon'
  },
  {
    id: 5,
    name: 'Pest Control Solution',
    description: 'Natural pest control for organic farming',
    price: '₱950',
    category: 'Pest Control',
    status: 'coming-soon'
  },
  {
    id: 6,
    name: 'Harvesting Tools Set',
    description: 'Complete set of professional harvesting tools',
    price: '₱3,200',
    category: 'Tools',
    status: 'coming-soon'
  }
];

const categories = [
  { name: 'Fertilizers', count: 12, icon: Package },
  { name: 'Equipment', count: 8, icon: Truck },
  { name: 'Seeds', count: 15, icon: Store },
  { name: 'Tools', count: 20, icon: ShoppingCart }
];

export default function MarketplacePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
          <p className="text-gray-600 mt-2">Discover farming supplies and equipment</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Products"
            value="55"
            icon={<Package className="h-6 w-6" />}
          />
          <DashboardCard
            title="Categories"
            value="8"
            icon={<Store className="h-6 w-6" />}
          />
          <DashboardCard
            title="Featured Items"
            value="12"
            icon={<ShoppingCart className="h-6 w-6" />}
          />
          <DashboardCard
            title="Coming Soon"
            value="40"
            icon={<Truck className="h-6 w-6" />}
          />
        </div>

        {/* Categories */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div key={category.name} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{category.name}</h4>
                    <p className="text-sm text-gray-500">{category.count} items</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketplaceProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      Coming Soon
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Package className="h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border p-6">
          <div className="text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketplace Coming Soon!</h3>
            <p className="text-gray-600 mb-4 max-w-md mx-auto">
              We're building a comprehensive marketplace for all your farming needs. 
              Get ready to discover quality products, competitive prices, and reliable suppliers.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>✓ Quality Products</span>
              <span>✓ Secure Payments</span>
              <span>✓ Fast Delivery</span>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-4">
            Be the first to know when our marketplace launches and get exclusive early access.
          </p>
          <div className="flex space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Features Preview */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Quality Products</h4>
              <p className="text-sm text-gray-600">
                Curated selection of premium farming supplies and equipment
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-sm text-gray-600">
                Reliable shipping to your farm with real-time tracking
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Store className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Best Prices</h4>
              <p className="text-sm text-gray-600">
                Competitive pricing and bulk discounts for farmers
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 