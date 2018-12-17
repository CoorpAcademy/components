import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M21.8 5.6l-1.6-1.2-2.309 3.077L16 5.586V4h1V2H7v2h1v1.586L6.108 7.478 3.8 4.4 2.2 5.6 5 9.333V20c0 1.103.896 2 2 2h10c1.104 0 2-.897 2-2V9.333L21.8 5.6zM9.414 7h5.172l1 1H8.414l1-1zM14 4v1h-4V4h4zM7 20V10h10v10H7z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
