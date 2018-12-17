import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M5 21a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1H5v1zM19.632 12.823l-3.948-1.314a1.002 1.002 0 0 1-.684-.95V7.63c.641-.728 1-1.664 1-2.63 0-2.206-1.794-4-4-4S8 2.794 8 5c0 .966.359 1.902 1 2.63v2.929a1 1 0 0 1-.684.95l-3.948 1.314A2.001 2.001 0 0 0 3 14.721V19h18v-4.279c0-.861-.551-1.625-1.368-1.898z" />
    </g>
  </svg>
);

export default SvgComponent;
