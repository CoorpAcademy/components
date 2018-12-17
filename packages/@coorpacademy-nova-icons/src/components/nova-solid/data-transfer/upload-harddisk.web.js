import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.707 7.294L12 2.587 7.293 7.294l1.414 1.414L11 6.416v6.586h2V6.416l2.293 2.292zM20 14.002H4c-1.103 0-2 .896-2 2v4c0 1.102.897 2 2 2h16c1.104 0 2-.898 2-2v-4a2 2 0 0 0-2-2zm-5 4.999a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
