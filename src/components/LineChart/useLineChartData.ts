import { useMemo } from 'react';
import { distributions } from '../../service/MockApi';

export function useLineChartData(): { labels: string[]; values: number[] } {
  return useMemo(() => {
    const labels = distributions.map((d) => d.date);
    const values = distributions.map((d) => d.beneficiaries);
    return { labels, values };
  }, []);
} 