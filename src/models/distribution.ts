/**
 * Represents a distribution record in the aid distribution system
 */
export interface Distribution {
  /** Unique identifier for the distribution */
  id: string;
  /** Geographic region where the distribution takes place */
  region: string;
  /** Date when the distribution occurred or is planned */
  date: string;
  /** Current status of the distribution (Planned, Ongoing, Completed) */
  status: string;
  /** Number of beneficiaries in this distribution */
  beneficiaries: number;
  /** Type of aid being distributed */
  aidType: string;
  /** Method used to deliver the aid */
  deliveryChannel: string;
} 