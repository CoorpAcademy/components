import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M12.042 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.478-10-10-10zm4.707 13.293l-1.414 1.414-3.293-3.292-3.293 3.292-1.414-1.414L10.627 12 7.334 8.707l1.414-1.413 3.293 3.293 3.293-3.293 1.414 1.413L13.456 12l3.293 3.293z"
    />
  </svg>
);

export default SvgComponent;
