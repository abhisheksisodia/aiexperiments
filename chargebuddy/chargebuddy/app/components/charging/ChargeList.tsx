'use client';

import { useState, useEffect } from 'react';
import { Battery, MapPin, Calendar } from 'lucide-react';

interface ChargingSession {
  id: string;
  date: string;
  time: string;
  location: string;
  energyAdded: number;
  cost: number;
}

export function ChargeList() {
  const [sessions, setSessions] = useState<ChargingSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortField, setSortField] = useState<keyof ChargingSession>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    fetchSessions();
  }, [sortField, sortDirection]);

  const fetchSessions = async () => {
    try {
      const response = await fetch(
        `/api/charging?sort=${sortField}&direction=${sortDirection}`
      );
      if (!response.ok) throw new Error('Failed to fetch sessions');
      const data = await response.json();
      setSessions(data);
    } catch (error) {
      console.error('Error fetching charging sessions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSort = (field: keyof ChargingSession) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  if (isLoading) {
    return <div>Loading charging sessions...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Charging History</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Date & Time</span>
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('location')}
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Location</span>
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('energyAdded')}
              >
                <div className="flex items-center space-x-2">
                  <Battery className="w-4 h-4" />
                  <span>Energy (kWh)</span>
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Cost
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sessions.map((session) => (
              <tr key={session.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(`${session.date} ${session.time}`).toLocaleString()}
                </td>
                <td className="px-6 py-4">{session.location}</td>
                <td className="px-6 py-4">{session.energyAdded} kWh</td>
                <td className="px-6 py-4">${session.cost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 