import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M10.998 24h-10a.998.998 0 0 1-.732-1.68l2.306-2.484C1.539 18.392.998 16.735.998 15c0-4.963 4.486-9 10-9v2c-4.411 0-8 3.141-8 7 0 1.537.568 3 1.642 4.232a1 1 0 0 1-.021 1.338L3.291 22h7.707c4.411 0 8-3.14 8-7h2c0 4.963-4.486 9-10 9zM21.998 6h-3V3h-2v3h-3v2h3v3h2V8h3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
