import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { usePieChartData } from './usePieChartData';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const { data } = usePieChartData();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right' as const,
        align: 'start' as const,
        labels: {
          boxWidth: 20,
          padding: 16,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    layout: {
      padding: 0,
    },
  };

  return (
    <div className="w-full h-80 sm:h-96 flex flex-col items-center justify-center">
      <span className="my-2 text-sm text-gray-700">Aid Distribution by Type</span>
      <div className="w-full h-full">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
} 