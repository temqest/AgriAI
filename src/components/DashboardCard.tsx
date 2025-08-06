import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  description?: string;
  value?: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  children?: React.ReactNode;
}

export default function DashboardCard({
  title,
  description,
  value,
  icon,
  trend,
  className,
  children
}: DashboardCardProps) {
  return (
    <Card className={cn("hover:shadow-md transition-shadow", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-sm font-medium text-gray-600">
            {title}
          </CardTitle>
          {description && (
            <CardDescription className="text-xs text-gray-500">
              {description}
            </CardDescription>
          )}
        </div>
        {icon && (
          <div className="h-8 w-8 text-green-600">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        {children ? (
          children
        ) : (
          <div className="space-y-2">
            {value && (
              <div className="text-2xl font-bold text-gray-900">
                {value}
              </div>
            )}
            {trend && (
              <div className="flex items-center text-xs">
                <span
                  className={cn(
                    "font-medium",
                    trend.isPositive ? "text-green-600" : "text-red-600"
                  )}
                >
                  {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
                </span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
} 