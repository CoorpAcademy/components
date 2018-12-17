import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 8.001h-2v4H8l2 4h6v-4l-4-1zM18 15.001l3-3-3-3zM24 12.001l-3-3v6zM6 15.001v-6l-3 3zM0 12.001l3 3v-6zM15 6.001l-3-3-3 3zM12 .001l-3 3h6zM9 18.001l3 3 3-3zM12 24.001l3-3H9z" />
    </g>
  </svg>
);

export default SvgComponent;
