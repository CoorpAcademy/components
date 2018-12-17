import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M4 6V2L0 6zM24 8H13l-.01-.012L6 14.979V15l5.511 5.511zM8 2H6v10.151l5.705-5.705zM12.925 21.925L13 22h10l-6.247-3.904z" />
    </g>
  </svg>
);

export default SvgComponent;
