import { useParams } from 'react-router-dom';
import { DistributionDetails } from './DistributionDetails';
import { useDistributionDetails } from './useDistributionDetails';

export function DistributionDetailsContainer() {
  const { id } = useParams<{ id: string }>();
  const { distribution, detail } = useDistributionDetails(id);

  return <DistributionDetails distribution={distribution} detail={detail} />;
} 