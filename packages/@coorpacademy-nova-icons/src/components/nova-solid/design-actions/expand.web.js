import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 8h2v2h-2zM20 5h2v2h-2zM5 20h2v2H5zM8 20h2v2H8zM11 20h2v2h-2zM14 20h2v2h-2zM17 20h2v2h-2zM20 20h2v2h-2zM20 11h2v2h-2zM20 14h2v2h-2zM20 17h2v2h-2zM13.293 2.707L14.586 4H4v10.586l-1.293-1.293-1.414 1.414L5 18.414l3.707-3.707-1.414-1.414L6 14.586V6h8.586l-1.293 1.293 1.414 1.414L18.414 5l-3.707-3.707z" />
    </g>
  </svg>
);

export default SvgComponent;
