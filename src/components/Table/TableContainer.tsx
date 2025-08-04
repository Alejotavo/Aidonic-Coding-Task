import { useState, useEffect } from 'react';
import { distributions } from '../../service/mockApi';
import type { Distribution } from '../../models';
import { Table } from './Table';
import { useFilteredDistributions } from './useFilteredDistributions';
import { usePaginatedData } from '../Pagination';

/**
 * Props interface for the TableContainer component
 */
export interface TableContainerProps {
  /** Current status filter value */
  status: string;
  /** Current region filter value */
  region: string;
}

/**
 * Container component that manages the table state and data flow
 * 
 * Responsibilities:
 * - Manages pagination state
 * - Applies filters to distribution data
 * - Handles pagination logic
 * - Resets pagination when filters change
 * 
 * @param props - The container component props
 * @returns JSX element representing the table container
 */
export function TableContainer({ status, region }: TableContainerProps) {
  // Pagination state management
  const [currentPage, setCurrentPage] = useState(1);
  
  // Configuration for items per page
  const itemsPerPage = 6;

  // Apply filters to the distribution data
  const filteredDistributions = useFilteredDistributions(
    distributions as Distribution[], 
    status, 
    region
  );

  // Calculate total items for pagination
  const totalItems = filteredDistributions.length;
  
  // Get paginated data for current page
  const paginatedDistributions = usePaginatedData(
    filteredDistributions, 
    currentPage, 
    itemsPerPage
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [status, region]);

  return (
    <Table
      distributions={paginatedDistributions}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      totalItems={totalItems}
      onPageChange={setCurrentPage}
    />
  );
} 