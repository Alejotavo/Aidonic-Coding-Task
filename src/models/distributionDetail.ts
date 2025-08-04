import type { Distribution } from './distribution';
import type { Beneficiary } from './beneficiary';

/**
 * Extended distribution record that includes detailed beneficiary information
 */
export interface DistributionDetail extends Distribution {
  /** List of individual beneficiaries in this distribution */
  beneficiaryList: Beneficiary[];
} 