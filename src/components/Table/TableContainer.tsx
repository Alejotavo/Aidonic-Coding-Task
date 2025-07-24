import { useState, useEffect } from 'react';
import { distributions } from '../../service/MockApi';
import type { Distribution } from '../../models/Beneficiary';
import { Table } from './Table';
import { useFilteredDistributions } from './useFilteredDistributions';
import { usePaginatedData } from './usePaginatedData';

export interface TableContainerProps {
  status: string;
  region: string;
}

export function TableContainer({ status, region }: TableContainerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredDistributions = useFilteredDistributions(distributions as Distribution[], status, region);

  const totalItems = filteredDistributions.length;
  const paginatedDistributions = usePaginatedData(filteredDistributions, currentPage, itemsPerPage);

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