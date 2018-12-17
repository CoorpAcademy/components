import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M16.989 21.093C15.471 20.392 13.782 20 12 20s-3.471.392-4.989 1.093A1 1 0 0 0 7.43 23h9.141a1 1 0 0 0 .418-1.907zM20 5h-2c0 3.314-6 10-6 10S6 8.314 6 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
      <path d="M16 5a4 4 0 1 0-8 0c0 2.21 4 7 4 7s4-4.79 4-7zm-6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
    </g>
  </svg>
);

export default SvgComponent;
