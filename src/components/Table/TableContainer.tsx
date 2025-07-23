import React, { useMemo, useState, useEffect } from 'react';
import { distributions } from '../../service/MockApi';
import type { Distribution } from '../../models/Beneficiary';
import { Table } from './Table';

export interface TableContainerProps {
  status: string;
  region: string;
}

export function TableContainer({ status, region }: TableContainerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredDistributions = useMemo(() => {
    let result = distributions as Distribution[];
    if (status) result = result.filter(d => d.status === status);
    if (region) result = result.filter(d => d.region === region);
    return result;
  }, [status, region]);

  const totalItems = filteredDistributions.length;
  const paginatedDistributions = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredDistributions.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredDistributions, currentPage]);

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