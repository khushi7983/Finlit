import React from 'react';
import useScrollToTop from '../hooks/useScrollToTop';

const withScrollToTop = (WrappedComponent) => {
  const WithScrollToTop = (props) => {
    useScrollToTop();
    return <WrappedComponent {...props} />;
  };

  // Set display name for debugging
  WithScrollToTop.displayName = `withScrollToTop(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithScrollToTop;
};

export default withScrollToTop;
