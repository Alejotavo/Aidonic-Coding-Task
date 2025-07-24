import { useMemo } from 'react';
import { distributions } from '../../service/MockApi';

export function usePieChartData() {
  return useMemo(() => {
    const aidTypeCounts: { [aidType: string]: number } = distributions.reduce((acc, curr) => {
      acc[curr.aidType] = (acc[curr.aidType] || 0) + 1;
      return acc;
    }, {} as { [aidType: string]: number });

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
    return { data };
  }, []);
} 