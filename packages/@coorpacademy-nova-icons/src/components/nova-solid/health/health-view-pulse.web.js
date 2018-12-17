import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24.001v24H0z" />
    <path
      fill="currentColor"
      d="M21.707 20.293l-4.396-4.395A7.954 7.954 0 0 0 19 11c0-4.411-3.589-8-8-8s-8 3.589-8 8h2.586l2.569-2.569 1.622 2.434 2.121-5.304L14.618 11H16v2h-2.618l-1.28-2.561-1.879 4.697-2.378-3.566L6.414 13h-3.15c.89 3.445 4.016 6 7.736 6a7.95 7.95 0 0 0 4.898-1.688l4.395 4.395 1.414-1.414z"
    />
  </svg>
);

export default SvgComponent;
