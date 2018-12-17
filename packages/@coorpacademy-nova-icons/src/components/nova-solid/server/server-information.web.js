import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .004h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 18c0-1.459.396-2.822 1.079-4H0v4c0 1.103.896 2 2 2h8.262A8.045 8.045 0 0 1 10 18zm-2 0H3v-2h5v2zM20 6V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v4h20zm-4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM3 2h5v2H3V2zM0 7v6h11.761a8.01 8.01 0 0 1 3.409-2.475A.976.976 0 0 1 15 10a1 1 0 1 1 2 0c0 .025-.013.047-.015.071A8.096 8.096 0 0 1 18 10a8.05 8.05 0 0 1 2 .262V7H0zm8 4H3V9h5v2zm5 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM18 11.999c-3.309 0-6 2.693-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.307-2.692-6-6-6zM19 22h-2v-4h2v4zm0-6a1 1 0 1 1-2 0 1 1 0 1 1 2 0z" />
    </g>
  </svg>
);

export default SvgComponent;
