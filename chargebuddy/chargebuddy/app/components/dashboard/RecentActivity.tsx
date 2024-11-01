'use client';

import { useRecentActivity } from "@/lib/hooks";

interface ChargingSession {
  id: string;
  location: string;
  date: string;
  energyAdded: number;
  cost: number;
}

export function RecentActivity() {
  const { data, isLoading } = useRecentActivity();

  if (isLoading) {
    return <div>Loading recent activity...</div>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {data?.recentSessions?.map((session: ChargingSession) => (
          <div
            key={session.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div>
              <p className="font-medium">{session.location}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(session.date).toLocaleDateString()}
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium">{session.energyAdded} kWh</p>
              <p className="text-sm text-muted-foreground">${session.cost}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 