import React from 'react';

type InputProps = React.ComponentProps<'input'>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`bg-slate-100 p-2 rounded-md text-slate-800 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow ${className}`}
      {...props}
    />
  );
};

export default Input;