import React from 'react';

type CheckboxProps = React.ComponentProps<'input'> & {
  label?: string;
};

const Checkbox = ({ className, label, ...props }: CheckboxProps) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className={`w-4 h-4 text-cyan-500 bg-white border-slate-300 rounded focus:ring-cyan-500 focus:ring-2 ${className}`}
        {...props}
      />
      {label && <span className="text-sm text-slate-700">{label}</span>}
    </label>
  );
};

export default Checkbox;
