
import { distributions } from '../service/mockApi';
import type { Distribution } from '../models/beneficiary';

function Table() {

 
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
          {(distributions as Distribution[]).map((row, idx) => (
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
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table; 