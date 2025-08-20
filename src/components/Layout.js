import React from "react";

/**
 * Layout
 * Provides consistent horizontal rhythm, max-width container, and adaptive padding.
 * Props:
 *  - className: additional utility classes
 *  - noPad: removes default padding (for full-bleed sections)
 */
const Layout = ({ children, className = "", noPad = false }) => {
  return (
    <div
      className={`relative w-full ${
        noPad ? "" : "px-8 py-16 md:py-14 md:px-6 sm:px-5 sm:py-12"
      } `}
    >
      <div className={`mx-auto max-w-7xl ${className}`}>{children}</div>
    </div>
  );
};

export default Layout;
