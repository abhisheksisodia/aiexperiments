'use client';

import { Battery, Gauge, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useDashboardStats } from "@/lib/hooks";

export function DashboardStats() {
  const { data, isLoading } = useDashboardStats();

  if (isLoading) {
    return <div>Loading stats...</div>;
  }

  const stats = [
    {
      title: "Total Energy Charged",
      value: data?.totalEnergy || "0",
      unit: "kWh",
      icon: Battery,
    },
    {
      title: "Average Cost",
      value: data?.avgCost || "0",
      unit: "$/kWh",
      icon: Wallet,
    },
    {
      title: "Total Trips",
      value: data?.totalTrips || "0",
      unit: "trips",
      icon: Gauge,
    },
  ];

  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6">
          <div className="flex items-center space-x-4">
            <stat.icon className="h-6 w-6 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <h3 className="text-2xl font-bold">
                {stat.value}
                <span className="text-sm font-normal text-muted-foreground ml-1">
                  {stat.unit}
                </span>
              </h3>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
} 