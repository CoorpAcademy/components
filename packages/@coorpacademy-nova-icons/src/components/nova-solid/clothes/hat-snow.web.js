import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24.001v24H.001z" />
    <g fill="currentColor">
      <path d="M18 15v3c0 1.103-.896 2-2 2a1.99 1.99 0 0 1-1-.277v2.135c.321.084.652.142 1 .142 2.205 0 4-1.795 4-4v-3.142A3.926 3.926 0 0 1 19 15h-1zM17 5c-2.757 0-5 2.243-5 5v3a1 1 0 0 0 1 1h6c1.654 0 3-1.346 3-3v-1c0-2.757-2.243-5-5-5z" />
      <path d="M11 11H9v3H7v-3H3v3a1 1 0 0 0 .684.949L6 15.721V18c0 2.205 1.795 4 4 4s4-1.795 4-4v-3h-3v-4zM17 4c.154 0 .305.012.456.023C16.766 2.82 15.483 2 14 2H9C5.691 2 3 4.691 3 8v1.998h8A6.006 6.006 0 0 1 17 4z" />
    </g>
  </svg>
);

export default SvgComponent;
