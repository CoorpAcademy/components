import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2.002a9.957 9.957 0 0 0-4 .838c3.53 1.543 6 5.062 6 9.162 0 4.1-2.47 7.619-6 9.162a9.957 9.957 0 0 0 4 .838c5.522 0 10-4.476 10-10s-4.478-10-10-10z"
    />
  </svg>
);

export default SvgComponent;
