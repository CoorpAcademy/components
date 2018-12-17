import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M6.242 1.634l-5.5 9.526a2.98 2.98 0 0 0-.3 2.276 2.973 2.973 0 0 0 1.398 1.821l5.196 3c.456.263.974.402 1.498.402a3.012 3.012 0 0 0 2.6-1.5l3.349-5.8 4.635-2.292L6.242 1.634zM19.5 11S16 16.567 16 18.5a3.5 3.5 0 1 0 7 0c0-1.933-3.5-7.5-3.5-7.5z" />
    </g>
  </svg>
);

export default SvgComponent;
