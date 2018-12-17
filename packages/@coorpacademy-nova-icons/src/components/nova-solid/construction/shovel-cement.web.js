import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      fill="currentColor"
      d="M20.414 1.627a2 2 0 0 0-2.828 0l-2.829 2.829.693.692L14 6.598v4.88l-1.273.848-2.213-2.213a1.993 1.993 0 0 0-1.806-.546 1.996 1.996 0 0 0-1.457 1.199l-2.1 7.485a2 2 0 0 0 2.611 2.611l7.757-1.829a2.001 2.001 0 0 0 .653-3.264l-2.002-2.001L16 12.547V7.426l.864-.863.722.722 2.828-2.829a2 2 0 0 0 0-2.829z"
    />
  </svg>
);

export default SvgComponent;
