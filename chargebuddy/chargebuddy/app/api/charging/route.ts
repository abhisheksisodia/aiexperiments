import { NextRequest, NextResponse } from 'next/server';

// This is a mock implementation. Replace with your actual database logic
let chargingSessions = [
  {
    id: '1',
    date: '2024-01-01',
    time: '10:00',
    location: 'Home Charger',
    energyAdded: 30,
    cost: 4.50
  }
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sort = searchParams.get('sort') || 'date';
  const direction = searchParams.get('direction') || 'desc';

  // Sort the sessions
  const sortedSessions = [...chargingSessions].sort((a: any, b: any) => {
    if (direction === 'asc') {
      return a[sort] > b[sort] ? 1 : -1;
    }
    return a[sort] < b[sort] ? 1 : -1;
  });

  return NextResponse.json(sortedSessions);
}

export async function POST(request: Request) {
  const data = await request.json();
  
  const newSession = {
    id: Date.now().toString(),
    ...data
  };

  chargingSessions.push(newSession);
  
  return NextResponse.json(newSession, { status: 201 });
} 