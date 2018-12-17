import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.001H0z" />
    <path
      d="M20 8v1h-5V4h1V2H8v2h1v5H4V8H2v8h2v-1h5v5H8v2h8v-2h-1v-5h5v1h2V8h-2zm-10 4c0-1.102.896-2 2-2s2 .898 2 2c0 1.103-.896 2-2 2s-2-.898-2-2zm3-8v4.142C12.679 8.058 12.348 8 12 8s-.679.059-1 .142V4h2zm-9 7h4.143c-.084.321-.143.652-.143 1s.059.679.143 1H4v-2zm7 9v-4.142c.321.084.652.142 1 .142s.679-.058 1-.142V20h-2zm4.857-7c.084-.321.143-.653.143-1s-.059-.679-.143-1H20v2h-4.143z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
