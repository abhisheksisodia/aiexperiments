'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Battery, Wallet } from 'lucide-react';

interface ChargeFormData {
  date: string;
  time: string;
  location: string;
  energyAdded: string;
  cost: string;
}

export function ChargeForm() {
  const [formData, setFormData] = useState<ChargeFormData>({
    date: '',
    time: '',
    location: '',
    energyAdded: '',
    cost: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/charging', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Failed to submit');
      
      // Reset form
      setFormData({
        date: '',
        time: '',
        location: '',
        energyAdded: '',
        cost: '',
      });
      
    } catch (error) {
      console.error('Error submitting charge session:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold">Log Charging Session</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date Input */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium">
            <Calendar className="w-4 h-4" />
            <span>Date</span>
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            required
          />
        </div>

        {/* Time Input */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium">
            <Clock className="w-4 h-4" />
            <span>Time</span>
          </label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            required
          />
        </div>

        {/* Location Input */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium">
            <MapPin className="w-4 h-4" />
            <span>Location</span>
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="Enter charging location"
            required
          />
        </div>

        {/* Energy Added Input */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium">
            <Battery className="w-4 h-4" />
            <span>Energy Added (kWh)</span>
          </label>
          <input
            type="number"
            value={formData.energyAdded}
            onChange={(e) => setFormData({ ...formData, energyAdded: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="0.00"
            step="0.01"
            min="0"
            required
          />
        </div>

        {/* Cost Input */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium">
            <Wallet className="w-4 h-4" />
            <span>Cost ($)</span>
          </label>
          <input
            type="number"
            value={formData.cost}
            onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="0.00"
            step="0.01"
            min="0"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Log Charging Session
      </button>
    </form>
  );
} 