import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9.359 15.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M11.718 22a3.99 3.99 0 0 0-3.858-3h-2a3.991 3.991 0 0 0-3.859 3h9.717zM19.643 15.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M22.001 22a3.99 3.99 0 0 0-3.858-3h-2a3.991 3.991 0 0 0-3.859 3h9.717zM14.501 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M16.859 11a3.99 3.99 0 0 0-3.858-3h-2a3.991 3.991 0 0 0-3.859 3h9.717z" />
    </g>
  </svg>
);

export default SvgComponent;
