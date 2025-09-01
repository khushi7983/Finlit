// Utility functions for scrolling

/**
 * Scroll to top of the page with smooth behavior
 */
export const scrollToTop = () => {
  try {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  } catch (error) {
    // Fallback for browsers that don't support smooth scrolling
    window.scrollTo(0, 0);
  }
};

/**
 * Scroll to top of the page instantly
 */
export const scrollToTopInstant = () => {
  window.scrollTo(0, 0);
};

/**
 * Scroll to a specific element by ID
 */
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    try {
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    } catch (error) {
      window.scrollTo(0, elementPosition);
    }
  }
};

/**
 * Scroll to a specific element by selector
 */
export const scrollToSelector = (selector, offset = 0) => {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    try {
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    } catch (error) {
      window.scrollTo(0, elementPosition);
    }
  }
};
