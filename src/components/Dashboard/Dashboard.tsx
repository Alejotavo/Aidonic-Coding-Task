import { LineChart } from '../LineChart/LineChart';
import { PieChart } from '../PieChart/PieChart';

export function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center h-64">
            <PieChart />
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center h-64">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
} 