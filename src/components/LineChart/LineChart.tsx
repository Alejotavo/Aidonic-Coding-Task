import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useLineChartData } from './useLineChartData';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function LineChart() {
  const { labels, values } = useLineChartData();

  const data = {
    labels,
    datasets: [
      {
        label: 'Beneficiaries',
        data: values,
        fill: false,
        borderColor: '#2563eb',
        backgroundColor: '#2563eb',
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#2563eb',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: '',
        },
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        title: {
          display: true,
          text: '',
        },
        beginAtZero: true,
        grid: {
          color: '#e5e7eb',
        },
      },
    },
    layout: {
      padding: 0,
    },
  };

  return (
    <div className="w-full h-80 sm:h-96 flex flex-col items-center justify-center">
      <span className="my-2 text-sm text-gray-700">Beneficiaries per Distribution</span>
      <div className="w-full h-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
} 