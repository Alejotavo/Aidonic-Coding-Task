import { useParams } from "react-router-dom";
import { distributions } from "../service/mockApi";
import type { Distribution } from "../models/beneficiary";
import Header from "../components/UI/header";

function DistributionDetailsCard({ distribution }: { distribution: Distribution }) {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Distribution Details</h2>
      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <div className="font-semibold text-gray-600">Region:</div>
        <div>{distribution.region}</div>
        <div className="font-semibold text-gray-600">Date:</div>
        <div>{distribution.date}</div>
        <div className="font-semibold text-gray-600">Status:</div>
        <div>{distribution.status}</div>
        <div className="font-semibold text-gray-600">Aid Type:</div>
        <div>{distribution.aidType}</div>
        <div className="font-semibold text-gray-600">Delivery Channel:</div>
        <div>{distribution.deliveryChannel}</div>
        <div className="font-semibold text-gray-600">Total Beneficiaries:</div>
        <div>{distribution.beneficiaries}</div>
        <div className="font-semibold text-gray-600">Beneficiaries:</div>
        <div>{distribution.beneficiaries}</div>
      </div>
    </div>
  );
}

// For demonstration, we'll get the distribution id from the URL params.
// If not using react-router, you can replace this with a prop or static id.
function DistributionDetailsPage() {
  // @ts-ignore
  const { id } = useParams<{ id: string }>() || {};
  const distribution = distributions.find((d) => d.id === id) || distributions[0];

  return (
    <>
      <Header />
      <DistributionDetailsCard distribution={distribution} />
    </>
  );
}

export default DistributionDetailsPage;
