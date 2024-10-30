import React from 'react';

export const Alert = ({ children, className }) => (
  <div className={`rounded-lg p-4 ${className}`}>
    {children}
  </div>
);

export const AlertDescription = ({ children }) => (
  <p>{children}</p>
);
