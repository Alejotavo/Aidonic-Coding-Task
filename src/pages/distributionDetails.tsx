import { useParams, Link } from 'react-router-dom';
import { distributions } from '../service/mockApi';
import type { Distribution } from '../models/beneficiary';

function DistributionDetails() {
  const { id } = useParams<{ id: string }>();
  const distribution = (distributions as Distribution[]).find(d => String(d.id) === id);

  if (!distribution) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Distribution not found</h2>
        <Link to="/" className="text-blue-600 hover:underline">Back to list</Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Distribution Details</h2>
      <div className="mb-2"><strong>Region:</strong> {distribution.region}</div>
      <div className="mb-2"><strong>Date:</strong> {distribution.date}</div>
      <div className="mb-2"><strong>Status:</strong> {distribution.status}</div>
      <div className="mb-2"><strong>Beneficiaries:</strong> {distribution.beneficiaries}</div>
      <Link to="/" className="inline-block mt-4 text-blue-600 hover:underline">Back to list</Link>
    </div>
  );
}

export default DistributionDetails; 