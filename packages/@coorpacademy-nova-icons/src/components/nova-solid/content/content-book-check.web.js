import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20zM18 14.091V1.001a1 1 0 0 0-1-1H6v20h7a5.997 5.997 0 0 1 5-5.91zM18 23.415l-3.707-3.707 1.414-1.414L18 20.587l4.293-4.293 1.414 1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
