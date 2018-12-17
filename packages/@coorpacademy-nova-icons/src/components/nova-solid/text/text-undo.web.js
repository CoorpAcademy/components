import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M13 2C8.515 2 4.711 4.969 3.447 9.042L1.866 6.305l-1.732 1 3.5 6.062 6.062-3.5-1-1.733-3.468 2.002C6.071 6.623 9.231 4 13 4c4.411 0 8 3.589 8 8s-3.589 8-8 8v2c5.514 0 10-4.485 10-10 0-5.514-4.486-10-10-10z"
    />
  </svg>
);

export default SvgComponent;
