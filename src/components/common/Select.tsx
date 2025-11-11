import React from 'react';

type SelectProps = React.ComponentProps<'select'> & {
  label?: string;
  error?: string;
  options: Array<{ value: string | number; label: string }>;
};

const Select = ({ className, label, error, options, ...props }: SelectProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <select
        className={`bg-white border ${
          error ? 'border-red-500' : 'border-slate-300'
        } p-2 rounded-md text-slate-800 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow disabled:bg-slate-100 disabled:cursor-not-allowed ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
};

export default Select;
