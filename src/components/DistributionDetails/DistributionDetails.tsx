import { Link } from 'react-router-dom';
import type { Distribution, DistributionDetail } from '../../models';

export interface DistributionDetailsProps {
  distribution: Distribution | undefined;
  detail: DistributionDetail | undefined;
}

export function DistributionDetails({ distribution, detail }: DistributionDetailsProps) {
  if (!distribution) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Distribution not found</h2>
        <Link to="/" className="text-blue-600 hover:underline">Back to list</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Distribution Details</h2>
        <div className="mb-2"><strong>Region:</strong> {distribution.region}</div>
        <div className="mb-2"><strong>Date:</strong> {distribution.date}</div>
        <div className="mb-2"><strong>Status:</strong> {distribution.status}</div>
        <div className="mb-2"><strong>Beneficiaries:</strong> {distribution.beneficiaries}</div>
        {detail && detail.beneficiaryList && (
          <div className="mb-2">
            <strong>Beneficiary Names:</strong>
            <div className="flex flex-wrap gap-2 mt-1">
              {detail.beneficiaryList.map(bnf => (
                <span
                  key={bnf.id}
                  className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium"
                >
                  {bnf.name}
                </span>
              ))}
            </div>
          </div>
        )}
        <Link to="/" className="inline-block mt-4 text-blue-600 hover:underline">Back to list</Link>
      </div>
    </div>
  );
} 