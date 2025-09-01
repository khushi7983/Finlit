import { useEffect } from 'react';
import { scrollToTop, scrollToTopInstant } from '../utils/scrollUtils';

const useScrollToTop = (dependencies = [], options = {}) => {
  const { 
    smooth = true, 
    delay = 0,
    condition = true 
  } = options;

  useEffect(() => {
    if (!condition) return;

    const scrollFunction = smooth ? scrollToTop : scrollToTopInstant;
    
    if (delay > 0) {
      const timer = setTimeout(scrollFunction, delay);
      return () => clearTimeout(timer);
    } else {
      scrollFunction();
    }
  }, dependencies);
};

export default useScrollToTop;
