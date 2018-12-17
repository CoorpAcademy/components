import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 3h4v4H2zM8 3h4v4H8zM2 9h4v4H2zM8 9h4v4H8zM2 15h4v4H2zM8 15h4v4H8zM14 3h4v4h-4zM15 21l-2-6h2V9h3v5l4 1v6z" />
    </g>
  </svg>
);

export default SvgComponent;
