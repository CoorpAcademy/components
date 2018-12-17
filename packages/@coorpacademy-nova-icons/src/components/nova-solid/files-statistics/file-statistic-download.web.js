import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 4.581L13.414-.005H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h10.682A6.971 6.971 0 0 1 12 18.996c0-.341.033-.673.08-1L3 17.998v-2h2V6.995h2v9.002h1v-4.002h2v4.001h1V9.995h2v5.409a6.99 6.99 0 0 1 5-3.328V4.581zm-6 1.414v-5l5 5h-5z" />
      <path d="M22.293 17.288L20 19.581v-5.586h-2v5.586l-2.293-2.293-1.414 1.414L19 23.409l4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
