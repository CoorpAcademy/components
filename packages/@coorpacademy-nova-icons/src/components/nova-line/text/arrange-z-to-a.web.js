import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.869 8l2.963-4.445A.998.998 0 0 0 20 2h-5v2h3.131l-2.963 4.445A.998.998 0 0 0 16 10h5V8h-3.131zM9 17.586V3H7v14.586l-2.293-2.293-1.414 1.414L8 21.414l4.707-4.707-1.414-1.414zM20 14h-4a1 1 0 0 0-1 1v7h2v-2h2v2h2v-7a1 1 0 0 0-1-1zm-3 4v-2h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
