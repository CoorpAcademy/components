import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 7h-8l-1.447-1.894A2 2 0 0 0 8.764 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-8 12a4.961 4.961 0 0 1-3.355-1.316L7 19v-4h5l-1.767 1.414A2.951 2.951 0 0 0 12 17a2.996 2.996 0 0 0 2.816-2h2.083A5.009 5.009 0 0 1 12 19zm5-6h-5l1.767-1.414A2.951 2.951 0 0 0 12 11a2.996 2.996 0 0 0-2.816 2H7.101A5.009 5.009 0 0 1 12 9c1.295 0 2.466.506 3.355 1.316L17 9v4z"
    />
  </svg>
);

export default SvgComponent;
