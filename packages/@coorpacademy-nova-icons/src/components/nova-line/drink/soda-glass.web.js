import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={18} cy={4} r={1} />
      <circle cx={15} cy={15} r={1} />
      <circle cx={15} cy={3} r={1} />
      <path d="M19.756 6.345A1.003 1.003 0 0 0 19 6h-7.591l-.534-4H4v2h5.125l.267 2H7a1 1 0 0 0-.989 1.142l2 14c.07.493.491.858.989.858h8c.498 0 .92-.365.99-.858l2-14a1.003 1.003 0 0 0-.234-.797zM17.848 8l-.286 2h-5.619l-.267-2h6.172zm-8.19 0l.267 2H8.438l-.286-2h1.506zm6.475 12H9.867l-1.143-8h1.467l.817 6.133 1.982-.265L12.209 12h5.066l-1.142 8z" />
    </g>
  </svg>
);

export default SvgComponent;
