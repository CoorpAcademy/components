import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 2h-1v10h10v-1c0-4.961-4.037-9-9-9z" />
      <path d="M10 14.002v-9.94l-.124.016A9.005 9.005 0 0 0 2 13c0 4.963 4.037 9 9 9a9.005 9.005 0 0 0 8.922-7.877l.016-.122H10z" />
    </g>
  </svg>
);

export default SvgComponent;
