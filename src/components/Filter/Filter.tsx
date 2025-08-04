/**
 * Props interface for the Filter component
 */
export interface FilterProps {
  /** Label text to display for the filter */
  label: string;
  /** Current selected value of the filter */
  value: string;
  /** Array of available options for the filter */
  options: string[];
  /** Callback function called when the filter value changes */
  onChange: (value: string) => void;
}

/**
 * Filter component that renders a dropdown select for filtering data
 * 
 * @param props - The filter component props
 * @returns JSX element representing a filter dropdown
 */
export function Filter({ label, value, options, onChange }: FilterProps) {
  return (
    <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center">
      {/* Filter label */}
      <label
        htmlFor={`${label}-filter`}
        className="mb-1 sm:mb-0 sm:mr-2 font-medium text-base sm:text-sm"
      >
        {label}:
      </label>
      
      {/* Filter dropdown */}
      <select
        id={`${label}-filter`}
        className="border rounded px-4 py-2 text-base w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {/* Default "All" option */}
        <option value="">All</option>
        
        {/* Dynamic options from props */}
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
} 