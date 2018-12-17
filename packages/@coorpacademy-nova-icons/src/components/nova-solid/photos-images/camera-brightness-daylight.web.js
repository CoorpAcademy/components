import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21.707 11.294L19 8.587V6.001a1 1 0 0 0-1-1h-2.586l-2.707-2.707a.999.999 0 0 0-1.414 0L8.586 5.001H6a1 1 0 0 0-1 1v2.586l-2.707 2.707a.999.999 0 0 0 0 1.414L5 15.415V18a1 1 0 0 0 1 1h2.586l2.707 2.708a1 1 0 0 0 1.414 0L15.414 19H18a1 1 0 0 0 1-1v-2.585l2.707-2.707a.999.999 0 0 0 0-1.414zM12 17V7a5 5 0 1 1 0 10z"
    />
  </svg>
);

export default SvgComponent;
