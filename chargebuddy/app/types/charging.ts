export interface SavedLocation {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

export interface ChargingRate {
  id: string;
  rate: number;
  startTime?: string;
  endTime?: string;
  daysOfWeek?: string[];
  season?: 'summer' | 'winter' | 'all';
}

export interface ChargeFormData {
  chargeType: 'one-time' | 'recurring';
  date: string;
  time: string;
  locationId?: string;
  customLocation?: string;
  energyAdded: string;
  cost: string;
  recurringDays?: string[];
  recurringTime?: string;
} 