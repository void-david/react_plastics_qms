import React from 'react';

type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const Card = ({ title, children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b pb-2">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;
