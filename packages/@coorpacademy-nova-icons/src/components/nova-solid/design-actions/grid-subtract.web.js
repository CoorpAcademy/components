import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 22H2V8h11.422A4.979 4.979 0 0 1 13 6H0v18h18V11a4.962 4.962 0 0 1-2-.422V22z" />
      <path d="M10 10h4v4h-4zM10 16h4v4h-4zM4 10h4v4H4zM4 16h4v4H4zM15 5h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
