import { ChargeForm } from '../components/charging/ChargeForm';
import { ChargeList } from '../components/charging/ChargeList';

export default function ChargingPage() {
  return (
    <div className="p-6 space-y-8">
      <ChargeForm />
      <ChargeList />
    </div>
  );
} 