import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M15 15V5a1.001 1.001 0 0 0-1.514-.857l-5 3A.997.997 0 0 0 8 8v7H7v7c0 1.103.897 2 2 2h5c1.103 0 2-.897 2-2v-7h-1zm-6 2h5v2H9v-2zm1-8.434l3-1.8V15h-3V8.566zM9 22v-1h5.001v1H9z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
