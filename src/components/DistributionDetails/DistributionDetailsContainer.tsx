import { useParams } from 'react-router-dom';
import { distributions, distributionDetails } from '../../service/MockApi';
import type { Distribution } from '../../models/Beneficiary';
import { DistributionDetails } from './DistributionDetails';

export function DistributionDetailsContainer() {
  const { id } = useParams<{ id: string }>();
  const distribution = (distributions as Distribution[]).find(d => String(d.id) === id);
  const detail = id ? distributionDetails[id] : undefined;

  return <DistributionDetails distribution={distribution} detail={detail} />;
} 