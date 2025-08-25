import { LucideCrop as LucideProps } from 'lucide-react';

export const BeeIcon = ({ size = 24, className = '', ...props }: LucideProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2c3.86 0 7 3.14 7 7 0 1.93-.78 3.68-2.05 4.95L12 19l-4.95-5.05A6.96 6.96 0 0 1 5 9c0-3.86 3.14-7 7-7z"/>
    <circle cx="12" cy="9" r="3"/>
    <path d="M6 12l6 6 6-6"/>
    <path d="M8 8l8 2"/>
    <path d="M8 12l8-2"/>
  </svg>
);

export const HoneycombIcon = ({ size = 24, className = '', ...props }: LucideProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M6 3l6 3.5L18 3l3 5.2-3 5.2-6-3.5L6 13.4 3 8.2 6 3z"/>
    <path d="M6 10.6l6 3.5 6-3.5"/>
    <path d="M12 14.1V21"/>
  </svg>
);