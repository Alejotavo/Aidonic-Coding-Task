

import { distributions } from '../../service/MockApi';
import type { Distribution } from '../../models/Beneficiary';
import { Link } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import PaginationComponent from '../ui/paginationComponent/PaginationComponent';

interface TableProps {
  status: string;
  region: string;
}

const statusPillClass = (status: string) => {
  switch (status) {
    case 'Planned':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'Ongoing':
      return 'bg-blue-100 text-blue-800 border-blue-300';
    case 'Completed':
      return 'bg-green-100 text-green-800 border-green-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

function Table({ status, region }: TableProps) {
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

  React.useEffect(() => {
    setCurrentPage(1);
  }, [status, region]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b text-center">Region</th>
              <th className="px-4 py-2 border-b text-center">Date</th>
              <th className="px-4 py-2 border-b text-center">Status</th>
              <th className="px-4 py-2 border-b text-center">Beneficiaries</th>
              <th className="px-4 py-2 border-b text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedDistributions.map((d, idx) => (
              <tr
                key={d.id}
                className={
                  `hover:bg-blue-50 transition-colors ` +
                  (idx % 2 === 0 ? 'bg-white' : 'bg-gray-50')
                }
              >
                <td className="px-4 py-2 border-b text-left">{d.region}</td>
                <td className="px-4 py-2 border-b text-center">{d.date}</td>
                <td className="px-4 py-2 border-b text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusPillClass(d.status)}`}>{d.status}</span>
                </td>
                <td className="px-4 py-2 border-b text-center">{d.beneficiaries}</td>
                <td className="px-4 py-2 border-b text-center">
                  <Link to={`/distribution/${d.id}`} className="text-blue-600 hover:underline">Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationComponent
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="sm:hidden flex flex-col gap-4">
        {paginatedDistributions.map((row) => (
          <div key={row.id} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-200">
            <div className="flex justify-between">
              <span className="font-semibold">Region:</span>
              <span className="text-right w-full">{row.region}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Date:</span>
              <span>{row.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Status:</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusPillClass(row.status)}`}>{row.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Beneficiaries:</span>
              <span>{row.beneficiaries}</span>
            </div>
            <div className="flex justify-end">
              <Link to={`/distribution/${row.id}`} className="text-blue-600 hover:underline">Details</Link>
            </div>
          </div>
        ))}
        <PaginationComponent
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default React.memo(Table); 