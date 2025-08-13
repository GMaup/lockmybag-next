import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'peps1' | 'peps2';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  href
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover shadow-lg hover:shadow-xl',
    secondary: 'bg-brand-secondary text-brand-secondary-foreground hover:bg-brand-secondary-hover shadow-lg hover:shadow-xl',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-surface hover:border-brand-primary-hover',
    peps1: 'bg-peps1 text-peps1-foreground hover:bg-peps1-hover shadow-lg hover:shadow-xl',
    peps2: 'bg-peps2 text-peps2-foreground hover:bg-peps2-hover shadow-lg hover:shadow-xl'
  } as const;
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
