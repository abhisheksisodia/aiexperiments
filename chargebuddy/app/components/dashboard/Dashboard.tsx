'use client';

import { Card } from "@/components/ui/card";
import { DashboardStats } from "./DashboardStats";
import { RecentActivity } from "./RecentActivity";
import { ChargingRecommendations } from "./ChargingRecommendations";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useQuery } from '@tanstack/react-query';

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        
        {/* Add Charging Session CTA */}
        <Link 
          href="/charging" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Log Charging Session
        </Link>
      </div>
      
      {/* Summary Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <DashboardStats />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Charging Sessions */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Charges</h2>
            <Link 
              href="/charging" 
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {/* Recent charging sessions list */}
            <RecentChargingSessions />
          </div>
        </Card>

        {/* Charging Recommendations */}
        <Card className="p-6">
          <ChargingRecommendations />
        </Card>
      </div>
    </div>
  );
}

// New component for recent charging sessions
function RecentChargingSessions() {
  const { data, isLoading } = useRecentChargingSessions();

  if (isLoading) {
    return <div>Loading recent charges...</div>;
  }

  return (
    <div className="divide-y">
      {data?.slice(0, 5).map((session: any) => (
        <div key={session.id} className="py-3 flex justify-between">
          <div>
            <p className="font-medium">{session.location}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(`${session.date} ${session.time}`).toLocaleDateString()}
            </p>
          </div>
          <div className="text-right">
            <p className="font-medium">{session.energyAdded} kWh</p>
            <p className="text-sm text-muted-foreground">
              ${session.cost.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Add this to your hooks.ts file
function useRecentChargingSessions() {
  return useQuery({
    queryKey: ['recentChargingSessions'],
    queryFn: async () => {
      const response = await fetch('/api/charging?limit=5');
      if (!response.ok) throw new Error('Failed to fetch recent charging sessions');
      return response.json();
    },
  });
} 