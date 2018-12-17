import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12.515 3c-2.762 0-5.39.948-7.5 2.644V4h-2v5h5V7h-1.49c1.712-1.284 3.8-2 5.989-2a9.977 9.977 0 0 1 7.714 3.637l1.542-1.273A11.965 11.965 0 0 0 12.515 3z" />
      <path d="M17.331 14.052l-2.316-.773V9a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v6h-1a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-.684-.948zM16.015 19h-4.382l-1-2h.382a1 1 0 0 0 1-1v-6h1v4a1 1 0 0 0 .684.949l2.316.771V19z" />
    </g>
  </svg>
);

export default SvgComponent;
