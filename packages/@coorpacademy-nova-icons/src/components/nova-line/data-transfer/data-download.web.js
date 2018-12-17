import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 2.001c-5.514 0-10 4.485-10 10 0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.59-8-8 0-4.412 3.589-8 8-8s8 3.588 8 8c0 4.411-3.589 8-8 8z" />
      <path d="M13 14.587V6.001h-2v8.586l-2.293-2.293-1.414 1.414L12 18.416l4.707-4.708-1.414-1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
