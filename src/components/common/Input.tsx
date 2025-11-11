import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label?: string;
  error?: string;
};

const Input = ({ className, label, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        className={`bg-white border ${
          error ? 'border-red-500' : 'border-slate-300'
        } p-2 rounded-md text-slate-800 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow disabled:bg-slate-100 disabled:cursor-not-allowed ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
};

export default Input;
