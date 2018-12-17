import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12.5 2.127C7.691 2.852 4 6.991 4 12.002c0 5.012 3.691 9.15 8.5 9.875 4.809-.725 8.5-4.863 8.5-9.875 0-5.011-3.691-9.15-8.5-9.875z"
    />
  </svg>
);

export default SvgComponent;
