import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { distributions } from '../../../service/MockApi';

ChartJS.register(ArcElement, Tooltip, Legend);

interface AidTypeCount {
  [aidType: string]: number;
}

function PieChart() {

  const aidTypeCounts: AidTypeCount = distributions.reduce((acc: AidTypeCount, curr) => {
    acc[curr.aidType] = (acc[curr.aidType] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(aidTypeCounts),
    datasets: [
      {
        label: 'Distributions by aid type',
        data: Object.values(aidTypeCounts),
        backgroundColor: [
          '#2563eb',
          '#f59e42', 
          '#10b981',
          '#f43f5e',
          '#a78bfa',
          '#fbbf24',
        ],
        borderColor: [
          '#1e40af',
          '#ea580c',
          '#047857',
          '#be123c',
          '#7c3aed',
          '#b45309',
        ],
        borderWidth: 1,
      },
    ],
  };

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

export default PieChart;
