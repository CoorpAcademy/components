import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={18} cy={4} r={1} />
      <circle cx={15} cy={3} r={1} />
      <path d="M19.756 6.345A1.003 1.003 0 0 0 19 6h-7.592l-.417-3.132A1 1 0 0 0 10 2H4v2h5.125l.266 2H7a1.003 1.003 0 0 0-.99 1.142l2 14c.07.493.492.858.99.858h8c.498 0 .92-.365.99-.858l2-14a1.003 1.003 0 0 0-.234-.797zM8.439 10l-.287-2h1.506l.266 2H8.439zM10 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm2 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2.562-6h-5.619l-.267-2h6.172l-.286 2z" />
    </g>
  </svg>
);

export default SvgComponent;
