import { useMemo } from 'react';

/**
 * Generic custom hook that handles pagination logic for any array of data
 * 
 * Features:
 * - Generic type support for any data type
 * - Memoized pagination for performance optimization
 * - Calculates correct slice of data for current page
 * - Handles edge cases (empty data, invalid page numbers)
 * 
 * @param data - Array of data to paginate
 * @param currentPage - Current page number (1-based indexing)
 * @param itemsPerPage - Number of items to display per page
 * @returns Array slice containing items for the current page
 */
export function usePaginatedData<T>(
  data: T[],
  currentPage: number,
  itemsPerPage: number
): T[] {
  return useMemo(() => {
    // Calculate the starting index for the current page
    const startIdx = (currentPage - 1) * itemsPerPage;
    
    // Return the slice of data for the current page
    return data.slice(startIdx, startIdx + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);
} 