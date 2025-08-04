import { useMemo } from 'react';
import type { Distribution } from '../../models';

/**
 * Custom hook that filters distribution data based on status and region criteria
 * 
 * Features:
 * - Memoized filtering for performance optimization
 * - Supports filtering by status and/or region
 * - Returns empty array if no distributions match criteria
 * - Case-sensitive exact matching
 * 
 * @param distributions - Array of distribution records to filter
 * @param status - Status filter value (empty string = no filter)
 * @param region - Region filter value (empty string = no filter)
 * @returns Filtered array of distributions matching the criteria
 */
export function useFilteredDistributions(
  distributions: Distribution[],
  status: string,
  region: string
): Distribution[] {
  
  return useMemo(() => {
    // Start with all distributions
    let result = distributions;
    
    // Apply status filter if provided
    if (status) {
      result = result.filter(distribution => distribution.status === status);
    }
    
    // Apply region filter if provided
    if (region) {
      result = result.filter(distribution => distribution.region === region);
    }
    
    return result;
  }, [distributions, status, region]);
}
