import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 10h4v4H4zM4 16h4v4H4zM10 16h4v4h-4z" />
      <path d="M16 22H2V8h8.262A7.998 7.998 0 0 1 10 6H0v18h18V14a7.998 7.998 0 0 1-2-.262V22z" />
      <path d="M14 12.921A8.037 8.037 0 0 1 11.079 10H10v4h4v-1.079zM18-.016c-3.309 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
