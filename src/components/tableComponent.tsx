

import { distributions } from '../service/mockApi';
import type { Distribution } from '../models/beneficiary';
import { Link } from 'react-router-dom';

interface TableProps {
  status: string;
  region: string;
}

function Table({ status, region }: TableProps) {
  let filteredDistributions = distributions as Distribution[];
  if (status) {
    filteredDistributions = filteredDistributions.filter(row => row.status === status);
  }
  if (region) {
    filteredDistributions = filteredDistributions.filter(row => row.region === region);
  }

  return (
    <div className="overflow-x-auto">
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
              <td className="px-4 py-2 border-b">{row.status}</td>
              <td className="px-4 py-2 border-b text-right">{row.beneficiaries}</td>
              <td className="px-4 py-2 border-b">
                <Link to={`/distribution/${row.id}`} className="text-blue-600 hover:underline">Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table; 