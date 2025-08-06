import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ForecastCardProps {
  date: string;
  temperature: {
    high: number;
    low: number;
  };
  condition: 'sunny' | 'cloudy' | 'rainy' | 'windy';
  humidity: number;
  rainfall: number;
  className?: string;
}

export default function ForecastCard({
  date,
  temperature,
  condition,
  humidity,
  rainfall,
  className
}: ForecastCardProps) {
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      case 'windy':
        return <Wind className="h-8 w-8 text-gray-400" />;
      default:
        return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return 'bg-yellow-100 text-yellow-800';
      case 'cloudy':
        return 'bg-gray-100 text-gray-800';
      case 'rainy':
        return 'bg-blue-100 text-blue-800';
      case 'windy':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <Card className={cn("hover:shadow-md transition-shadow", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{date}</CardTitle>
          {getWeatherIcon(condition)}
        </div>
        <CardDescription>
          <Badge className={getConditionColor(condition)}>
            {condition.charAt(0).toUpperCase() + condition.slice(1)}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Temperature</span>
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900">
              {temperature.high}°C
            </div>
            <div className="text-sm text-gray-500">
              Low: {temperature.low}°C
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Humidity</span>
          <span className="text-sm font-medium">{humidity}%</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Rainfall</span>
          <span className="text-sm font-medium">{rainfall}mm</span>
        </div>
      </CardContent>
    </Card>
  );
} 