import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 17l4-5 2.005 4.679A5.993 5.993 0 0 1 18 14.092V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h11.348A5.99 5.99 0 0 1 13 20.001c0-.342.035-.674.09-1.001H3l3-4 2 2zm4-16l5 5h-5V1zm-9 9.5a2.499 2.499 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" />
      <path d="M22.293 16.294L18 20.587l-2.293-2.293-1.414 1.414L18 23.415l5.707-5.707z" />
    </g>
  </svg>
);

export default SvgComponent;
