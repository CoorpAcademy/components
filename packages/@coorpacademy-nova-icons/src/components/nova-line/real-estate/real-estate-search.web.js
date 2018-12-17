import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M22.414 22l-3.676-3.676A9.95 9.95 0 0 0 21 12c0-5.514-4.486-10-10-10S1 6.486 1 12c0 5.515 4.486 10 10 10 2.397 0 4.6-.85 6.324-2.262L21 23.414 22.414 22zM3 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8z" />
      <path d="M13 15H9v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z" />
      <path d="M11.707 5.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L11 7.414l5.293 5.292 1.414-1.414-6-5.999z" />
    </g>
  </svg>
);

export default SvgComponent;
