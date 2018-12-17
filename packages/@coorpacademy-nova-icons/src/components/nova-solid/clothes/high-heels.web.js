import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24.002h-24z" />
    <path
      fill="currentColor"
      d="M18.5 15h-3L6.8 3.4A1 1 0 0 0 6 3H5C3.346 3 2 4.346 2 6v16h2v-9.413l7.07 7.776A5.007 5.007 0 0 0 14.769 22H18.5c1.93 0 3.5-1.57 3.5-3.5S20.43 15 18.5 15z"
    />
  </svg>
);

export default SvgComponent;
