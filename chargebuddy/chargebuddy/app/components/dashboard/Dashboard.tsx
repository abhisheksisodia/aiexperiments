'use client';

import { Card } from "@/components/ui/card";
import { DashboardStats } from "./DashboardStats";
import { RecentActivity } from "./RecentActivity";
import { ChargingRecommendations } from "./ChargingRecommendations";

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      {/* Summary Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <DashboardStats />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <Card className="p-6">
          <RecentActivity />
        </Card>

        {/* Charging Recommendations */}
        <Card className="p-6">
          <ChargingRecommendations />
        </Card>
      </div>
    </div>
  );
} 