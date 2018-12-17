import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M8 12h12a1 1 0 0 0 1-1c0-3.86-3.14-7-7-7s-7 3.14-7 7a1 1 0 0 0 1 1zm6-6a5.008 5.008 0 0 1 4.899 4H9.101A5.008 5.008 0 0 1 14 6z" />
      <path d="M20.98 13.804A.998.998 0 0 0 20 13H6V6c0-1.654-1.346-3-3-3H1v2h2c.551 0 1 .449 1 1v7.902l-.98 4.901A.998.998 0 0 0 4 20h17a.998.998 0 0 0 .98-1.196l-1-5zM5.22 18l.6-3h13.36l.6 3H5.22z" />
      <circle cx={14} cy={3} r={1} />
      <path d="M8 23a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM17 23a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z" />
    </g>
  </svg>
);

export default SvgComponent;
