import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.652 10.592l1.41 1.41 1.409-1.41a1.955 1.955 0 0 0-1.409-.59c-.55 0-1.05.221-1.41.59zM16 2a9.932 9.932 0 0 0-7.097 2.956l1.419 1.409A7.947 7.947 0 0 1 16 4c2.139 0 4.15.834 5.662 2.349l1.415-1.414A9.936 9.936 0 0 0 16 2z" />
      <path d="M11.767 7.749l1.411 1.417A3.975 3.975 0 0 1 16 8c1.069 0 2.073.417 2.829 1.173l1.415-1.412A5.955 5.955 0 0 0 16 6a5.96 5.96 0 0 0-4.233 1.749zM11 11H5V6h3V4H5c-1.103 0-2 .896-2 2v14c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2V10h-2v1zm-6 9v-7h6v7H5z" />
      <circle cx={8} cy={17} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
