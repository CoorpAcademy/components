import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 11.001v-3h-2v4H8l2 4h6v-4zM15 6.001l-3-3-3 3zM12 .001l-3 3h6zM9 18.001l3 3 3-3zM12 24.001l3-3H9z" />
    </g>
  </svg>
);

export default SvgComponent;
