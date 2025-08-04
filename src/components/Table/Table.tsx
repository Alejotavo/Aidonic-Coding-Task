
import { Link } from 'react-router-dom';
import type { Distribution } from '../../models';
import { PaginationComponent } from '../Pagination/PaginationComponent';

/**
 * Props interface for the Table component
 */
export interface TablePresentationalProps {
  /** Array of distribution records to display */
  distributions: Distribution[];
  /** Current page number for pagination */
  currentPage: number;
  /** Number of items to display per page */
  itemsPerPage: number;
  /** Total number of items across all pages */
  totalItems: number;
  /** Callback function when page changes */
  onPageChange: (page: number) => void;
}

/**
 * Status configuration for styling status pills
 */
const STATUS_CONFIG = {
  Planned: {
    classes: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    label: 'Planned'
  },
  Ongoing: {
    classes: 'bg-blue-100 text-blue-800 border-blue-300',
    label: 'Ongoing'
  },
  Completed: {
    classes: 'bg-green-100 text-green-800 border-green-300',
    label: 'Completed'
  }
} as const;

/**
 * Table column configuration for better maintainability
 */
const TABLE_COLUMNS = [
  { key: 'region', label: 'Region', align: 'left' as const },
  { key: 'date', label: 'Date', align: 'center' as const },
  { key: 'status', label: 'Status', align: 'center' as const },
  { key: 'beneficiaries', label: 'Beneficiaries', align: 'center' as const },
  { key: 'action', label: 'Action', align: 'center' as const }
] as const;



/**
 * Gets the appropriate CSS classes for a status pill based on the status value
 * 
 * @param status - The status string to get classes for
 * @returns CSS classes string for the status pill
 */
const getStatusPillClasses = (status: string): string => {
  const statusConfig = STATUS_CONFIG[status as keyof typeof STATUS_CONFIG];
  return statusConfig?.classes || 'bg-gray-100 text-gray-800 border-gray-300';
};

/**
 * Renders a status pill component with appropriate styling
 * 
 * @param status - The status to display
 * @returns JSX element for the status pill
 */
const StatusPill = ({ status }: { status: string }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusPillClasses(status)}`}>
    {status}
  </span>
);

/**
 * Renders a table header row with configured columns
 * 
 * @returns JSX element for the table header
 */
const TableHeader = () => (
  <thead className="bg-gray-100">
    <tr>
      {TABLE_COLUMNS.map((column) => (
        <th 
          key={column.key}
          className={`px-4 py-2 border-b text-${column.align}`}
        >
          {column.label}
        </th>
      ))}
    </tr>
  </thead>
);

/**
 * Renders a single table row for desktop view
 * 
 * @param distribution - The distribution data to display
 * @param index - The row index for alternating colors
 * @returns JSX element for a table row
 */
const TableRow = ({ distribution, index }: { distribution: Distribution; index: number }) => (
  <tr
    key={distribution.id}
    className={`hover:bg-blue-50 transition-colors ${
      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
    }`}
  >
    <td className="px-4 py-2 border-b text-left">{distribution.region}</td>
    <td className="px-4 py-2 border-b text-center">{distribution.date}</td>
    <td className="px-4 py-2 border-b text-center">
      <StatusPill status={distribution.status} />
    </td>
    <td className="px-4 py-2 border-b text-center">{distribution.beneficiaries}</td>
    <td className="px-4 py-2 border-b text-center">
      <Link 
        to={`/distribution/${distribution.id}`} 
        className="text-blue-600 hover:underline"
      >
        Details
      </Link>
    </td>
  </tr>
);

/**
 * Renders the desktop table view
 * 
 * @param props - Component props
 * @returns JSX element for desktop table
 */
const DesktopTable = ({ distributions, currentPage, itemsPerPage, totalItems, onPageChange }: TablePresentationalProps) => (
  <div className="hidden sm:block overflow-x-auto">
    <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
      <TableHeader />
      <tbody>
        {distributions.map((distribution, index) => (
          <TableRow 
            key={distribution.id}
            distribution={distribution} 
            index={index} 
          />
        ))}
      </tbody>
    </table>
    <PaginationComponent
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onPageChange={onPageChange}
    />
  </div>
);

/**
 * Renders a single mobile card for a distribution
 * 
 * @param distribution - The distribution data to display
 * @returns JSX element for a mobile card
 */
const MobileCard = ({ distribution }: { distribution: Distribution }) => (
  <div key={distribution.id} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-200">
    {/* Region field */}
    <div className="flex justify-between">
      <span className="font-semibold">Region:</span>
      <span className="text-right w-full">{distribution.region}</span>
    </div>
    
    {/* Date field */}
    <div className="flex justify-between">
      <span className="font-semibold">Date:</span>
      <span>{distribution.date}</span>
    </div>
    
    {/* Status field */}
    <div className="flex justify-between">
      <span className="font-semibold">Status:</span>
      <StatusPill status={distribution.status} />
    </div>
    
    {/* Beneficiaries field */}
    <div className="flex justify-between">
      <span className="font-semibold">Beneficiaries:</span>
      <span>{distribution.beneficiaries}</span>
    </div>
    
    {/* Action link */}
    <div className="flex justify-end">
      <Link 
        to={`/distribution/${distribution.id}`} 
        className="text-blue-600 hover:underline"
      >
        Details
      </Link>
    </div>
  </div>
);

/**
 * Renders the mobile cards view
 * 
 * @param props - Component props
 * @returns JSX element for mobile cards
 */
const MobileCards = ({ distributions, currentPage, itemsPerPage, totalItems, onPageChange }: TablePresentationalProps) => (
  <div className="sm:hidden flex flex-col gap-4">
    {distributions.map((distribution) => (
      <MobileCard key={distribution.id} distribution={distribution} />
    ))}
    <PaginationComponent
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onPageChange={onPageChange}
    />
  </div>
);

/**
 * Main Table component that displays distribution data in both desktop and mobile views
 * 
 * Features:
 * - Responsive design with desktop table and mobile cards
 * - Status pills with color coding
 * - Pagination support
 * - Hover effects and alternating row colors
 * - Links to detailed views
 * 
 * @param props - The table component props
 * @returns JSX element representing the distribution table
 */
export function Table({
  distributions,
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}: TablePresentationalProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      {/* Desktop table view - hidden on small screens */}
      <DesktopTable
        distributions={distributions}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
      
      {/* Mobile cards view - hidden on large screens */}
      <MobileCards
        distributions={distributions}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    </div>
  );
} 