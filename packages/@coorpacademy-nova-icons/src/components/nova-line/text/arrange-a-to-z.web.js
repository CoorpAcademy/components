import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2h-4a1 1 0 0 0-1 1v7h2V8h2v2h2V3a1 1 0 0 0-1-1zm-3 4V4h2v2h-2zM20.832 15.555A.998.998 0 0 0 20 14h-5v2h3.131l-2.963 4.445A.998.998 0 0 0 16 22h5v-2h-3.131l2.963-4.445zM9 17.586V3H7v14.586l-2.293-2.293-1.414 1.414L8 21.414l4.707-4.707-1.414-1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
