import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children, className = '', icon }) => {
  return (
    <div className={`bg-background rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {icon && (
        <div className="mb-4 text-brand-primary">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
      )}
      <div className="text-secondary">
        {children}
      </div>
    </div>
  );
};

export default Card;
