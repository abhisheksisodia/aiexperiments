// ... existing types ...
interface SavedLocation {
  id: string;
  name: string;
  address: string;
  rates: {
    rate: number;
    startTime: string;
    endTime: string;
    daysOfWeek: string[];
    season: 'summer' | 'winter' | 'all';
  }[];
} 