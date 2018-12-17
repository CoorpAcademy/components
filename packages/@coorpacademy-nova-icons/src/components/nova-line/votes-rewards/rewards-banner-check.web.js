import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M17 12.001v7.132l-4.445-2.964a1 1 0 0 0-1.109 0L7 19.133V4.001h12c0-1.103-.896-2-2-2H7c-1.104 0-2 .897-2 2v17a1 1 0 0 0 1.554.832L12 18.204l5.445 3.63a1.006 1.006 0 0 0 1.027.05c.325-.175.528-.513.528-.883v-9h-2z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M12 13.769L8.116 9.885l1.768-1.767L12 10.234l4.116-4.116 1.768 1.767z"
    />
  </svg>
);

export default SvgComponent;
