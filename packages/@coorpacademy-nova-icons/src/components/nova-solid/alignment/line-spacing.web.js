import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9.293 13.708l1.414-1.414L7 8.586l-3.707 3.708 1.414 1.414L6 12.415v7.171l-1.293-1.292-1.414 1.414L7 23.415l3.707-3.707-1.414-1.414L8 19.586v-7.171zM13 9h8v2h-8zM13 22h8v2h-8zM16 6.001h2v2h2V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7h2V6.001zM18 2v2.001h-2V2h2zM20 21v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7h2v-2h2v2h2zm-4-4v-2h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
