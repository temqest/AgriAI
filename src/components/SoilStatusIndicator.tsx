import React from 'react';
import { Droplets, Thermometer } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SoilStatusIndicatorProps {
  moisture: number; // 0-100
  temperature: number; // Celsius
  ph: number; // 0-14
  className?: string;
}

export default function SoilStatusIndicator({
  moisture,
  temperature,
  ph,
  className
}: SoilStatusIndicatorProps) {
  const getMoistureStatus = (value: number) => {
    if (value < 30) return { status: 'Low', color: 'bg-red-100 text-red-800' };
    if (value < 70) return { status: 'Optimal', color: 'bg-green-100 text-green-800' };
    return { status: 'High', color: 'bg-blue-100 text-blue-800' };
  };

  const getPhStatus = (value: number) => {
    if (value < 6.0) return { status: 'Acidic', color: 'bg-orange-100 text-orange-800' };
    if (value <= 7.5) return { status: 'Neutral', color: 'bg-green-100 text-green-800' };
    return { status: 'Alkaline', color: 'bg-purple-100 text-purple-800' };
  };

  const moistureStatus = getMoistureStatus(moisture);
  const phStatus = getPhStatus(ph);

  return (
    <div className={cn("space-y-4", className)}>
      {/* Moisture */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Droplets className="h-5 w-5 text-blue-500" />
          <span className="text-sm font-medium">Moisture</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">{moisture}%</span>
          <Badge className={moistureStatus.color}>
            {moistureStatus.status}
          </Badge>
        </div>
      </div>

      {/* Temperature */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Thermometer className="h-5 w-5 text-red-500" />
          <span className="text-sm font-medium">Temperature</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">{temperature}°C</span>
          <Badge variant="outline">
            {temperature < 15 ? 'Cold' : temperature > 30 ? 'Hot' : 'Optimal'}
          </Badge>
        </div>
      </div>

      {/* pH Level */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500" />
          <span className="text-sm font-medium">pH Level</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">{ph}</span>
          <Badge className={phStatus.color}>
            {phStatus.status}
          </Badge>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Moisture Level</span>
            <span>{moisture}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${moisture}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 