import { useMemo } from 'react';
import { distributions, distributionDetails } from '../../service/mockApi';
import type { Distribution, DistributionDetail } from '../../models';

/**
 * Custom hook to fetch distribution details by ID
 * 
 * @param id - The distribution ID to fetch details for
 * @returns Object containing the distribution and its detailed information
 */
export function useDistributionDetails(id: string | undefined): {
  distribution: Distribution | undefined;
  detail: DistributionDetail | undefined;
  isLoading: boolean;
  error: string | null;
} {
  return useMemo(() => {
    // Handle undefined or invalid ID
    if (!id) {
      return {
        distribution: undefined,
        detail: undefined,
        isLoading: false,
        error: 'No distribution ID provided'
      };
    }

    // Find the distribution by ID
    const distribution = (distributions as Distribution[]).find(d => String(d.id) === id);
    
    if (!distribution) {
      return {
        distribution: undefined,
        detail: undefined,
        isLoading: false,
        error: `Distribution with ID ${id} not found`
      };
    }

    // Get detailed information if available
    const detail = distributionDetails[id];
    
    return {
      distribution,
      detail,
      isLoading: false,
      error: null
    };
  }, [id]);
} 