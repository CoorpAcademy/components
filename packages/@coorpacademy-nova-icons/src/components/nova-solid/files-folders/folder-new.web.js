import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M1 15h2v2H1zM1 19h2v2H1zM5 19h2v2H5zM9 19h2v2H9zM13 19h2v2h-2zM17 19h2v2h-2zM21 19h2v2h-2zM5 3h2v2H5zM1 3h2v2H1zM9 3h2v2H9zM1 7h2v2H1zM1 11h2v2H1zM21 11h2v2h-2zM21 15h2v2h-2zM13 7h2v2h-2zM17 7h2v2h-2zM21 7h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
