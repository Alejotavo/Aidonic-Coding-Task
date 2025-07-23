import React from "react";

interface FilterProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function Filter({ label, value, options, onChange }: FilterProps) {
  return (
    <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center">
      <label
        htmlFor={`${label}-filter`}
        className="mb-1 sm:mb-0 sm:mr-2 font-medium text-base sm:text-sm"
      >
        {label}:
      </label>
      <select
        id={`${label}-filter`}
        className="border rounded px-4 py-2 text-base w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
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

export default React.memo(Filter); 