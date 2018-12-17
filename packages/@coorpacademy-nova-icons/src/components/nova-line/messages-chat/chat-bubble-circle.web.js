import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M11.998 21h-10a.998.998 0 0 1-.732-1.68l2.306-2.484C2.539 15.392 1.998 13.735 1.998 12c0-4.963 4.486-9 10-9s10 4.037 10 9-4.486 9-10 9zm-7.707-2h7.707c4.411 0 8-3.14 8-7 0-3.859-3.589-7-8-7s-8 3.141-8 7c0 1.537.568 3 1.642 4.232a1 1 0 0 1-.021 1.338L4.291 19z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M10.998 9h6v2h-6zM10.998 13h6v2h-6z" />
    <circle cx={7.998} cy={10} r={1.25} fill="currentColor" />
    <circle cx={7.998} cy={14} r={1.25} fill="currentColor" />
  </svg>
);

export default SvgComponent;
