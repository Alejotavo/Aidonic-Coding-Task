

import { distributions } from '../service/MockApi';
import type { Distribution } from '../models/Beneficiary';
import { Link } from 'react-router-dom';
import React, { useMemo } from 'react';

interface TableProps {
  status: string;
  region: string;
}

// Helper to get pill color classes by status
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
  
  const filteredDistributions = useMemo(() => {
    let result = distributions as Distribution[];
    if (status) result = result.filter(d => d.status === status);
    if (region) result = result.filter(d => d.region === region);
    return result;
  }, [status, region]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">Region</th>
              <th className="px-4 py-2 border-b">Date</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Beneficiaries</th>
              <th className="px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredDistributions.map((d, idx) => (
              <tr
                key={d.id}
                className={
                  `hover:bg-blue-50 transition-colors ` +
                  (idx % 2 === 0 ? 'bg-white' : 'bg-gray-50')
                }
              >
                <td className="px-4 py-2 border-b">{d.region}</td>
                <td className="px-4 py-2 border-b">{d.date}</td>
                <td className="px-4 py-2 border-b">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusPillClass(d.status)}`}>{d.status}</span>
                </td>
                <td className="px-4 py-2 border-b text-right">{d.beneficiaries}</td>
                <td className="px-4 py-2 border-b">
                  <Link to={`/distribution/${d.id}`} className="text-blue-600 hover:underline">Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sm:hidden flex flex-col gap-4">
        {filteredDistributions.map((row) => (
          <div key={row.id} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-200">
            <div className="flex justify-between">
              <span className="font-semibold">Region:</span>
              <span>{row.region}</span>
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
      </div>
    </div>
  );
}

export default React.memo(Table); 