import React from 'react';

import './LoadingSpinner.css';


export const LoadingSpinner: React.FC = () => {
  return (
    <div className={`${'loading-spinner__overlay'}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};
