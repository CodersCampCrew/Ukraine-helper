import React from 'react';

import './LoadingSpinner.css';

interface SpinnerProps {
  asOverlay: string;
}

export const LoadingSpinner: React.FC<SpinnerProps> = (props) => {
  return (
    <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};
