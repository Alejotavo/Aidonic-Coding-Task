import { useMemo } from 'react';
import { distributions, distributionDetails } from '../../service/MockApi';
import type { Distribution, DistributionDetail } from '../../models/Beneficiary';

export function useDistributionDetails(id: string | undefined): {
  distribution: Distribution | undefined;
  detail: DistributionDetail | undefined;
} {
  return useMemo(() => {
    const distribution = (distributions as Distribution[]).find(d => String(d.id) === id);
    const detail = id ? distributionDetails[id] : undefined;
    return { distribution, detail };
  }, [id]);
} 