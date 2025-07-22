
interface FilterProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function Filter({ label, value, options, onChange }: FilterProps) {
  return (
    <div>
      <label htmlFor={`${label}-filter`} className="mr-2 font-medium">{label}:</label>
      <select
        id={`${label}-filter`}
        className="border rounded px-2 py-1"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="">All</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter; 