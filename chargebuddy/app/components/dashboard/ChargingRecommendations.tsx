'use client';

import { useChargingRecommendations } from "@/lib/hooks";
import { Clock } from "lucide-react";

export function ChargingRecommendations() {
  const { data, isLoading } = useChargingRecommendations();

  if (isLoading) {
    return <div>Loading recommendations...</div>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Optimal Charging Times</h2>
      <div className="space-y-4">
        {data?.optimalChargeTimes?.map((time, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">{"10AM - 11AM"}</p>
              <p className="text-sm text-muted-foreground">{"$0.087"}/kWh</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 