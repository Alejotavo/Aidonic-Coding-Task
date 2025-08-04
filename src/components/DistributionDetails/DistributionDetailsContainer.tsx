import { useParams } from 'react-router-dom';
import { DistributionDetails } from './DistributionDetails';
import { useDistributionDetails } from './useDistributionDetails';

/**
 * Container component that handles the distribution details page routing and data fetching
 * 
 * @returns JSX element representing the distribution details page
 */
export function DistributionDetailsContainer() {
  const { id } = useParams<{ id: string }>();
  const { distribution, detail, isLoading, error } = useDistributionDetails(id);

  // Show loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading distribution details...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <a 
            href="/" 
            className="text-blue-600 hover:underline"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return <DistributionDetails distribution={distribution} detail={detail} />;
} 