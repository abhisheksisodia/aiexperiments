import { NextResponse } from 'next/server';

// Mock data store - replace with your database
let savedLocations = [
  {
    id: '1',
    name: 'Home Charger',
    address: '123 Home St',
    rates: [
      {
        id: '1',
        rate: 0.12,
        startTime: '22:00',
        endTime: '06:00',
        daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        season: 'all'
      }
    ]
  }
];

export async function GET() {
  return NextResponse.json(savedLocations);
}

export async function POST(request: Request) {
  const data = await request.json();
  
  const newLocation = {
    id: Date.now().toString(),
    ...data,
    rates: data.rates.map((rate: any) => ({
      id: Date.now().toString() + Math.random(),
      ...rate
    }))
  };

  savedLocations.push(newLocation);
  
  return NextResponse.json(newLocation, { status: 201 });
} 