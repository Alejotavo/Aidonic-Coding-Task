

import { distributions } from '../service/mockApi';
import type { Distribution } from '../models/beneficiary';
import { Link } from 'react-router-dom';

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

  let filteredDistributions = distributions as Distribution[];
  if (status) {
    filteredDistributions = filteredDistributions.filter(row => row.status === status);
  }
  if (region) {
    filteredDistributions = filteredDistributions.filter(row => row.region === region);
  }

  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-6">
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
            {filteredDistributions.map((row, idx) => (
              <tr
                key={row.id}
                className={
                  `hover:bg-blue-50 transition-colors ` +
                  (idx % 2 === 0 ? 'bg-white' : 'bg-gray-50')
                }
              >
                <td className="px-4 py-2 border-b">{row.region}</td>
                <td className="px-4 py-2 border-b">{row.date}</td>
                <td className="px-4 py-2 border-b">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusPillClass(row.status)}`}>{row.status}</span>
                </td>
                <td className="px-4 py-2 border-b text-right">{row.beneficiaries}</td>
                <td className="px-4 py-2 border-b">
                  <Link to={`/distribution/${row.id}`} className="text-blue-600 hover:underline">Details</Link>
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

export default Table; 