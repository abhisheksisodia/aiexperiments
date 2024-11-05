import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for testing
  return NextResponse.json({
    totalEnergy: "150",
    avgCost: "0.15",
    totalTrips: "25",
    recentSessions: [
      {
        id: 1,
        location: "Home Charger",
        date: new Date().toISOString(),
        energyAdded: 30,
        cost: 4.50
      }
    ],
    optimalChargeTimes: [
      {
        timeSlot: "10 PM - 6 AM",
        rate: "$0.08"
      }
    ]
  });
} 