import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <circle cx={11} cy={13} r={2} />
      <path d="M9 9a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V9zM11 10a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1zM14 8a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1z" />
      <path d="M21.813 20.116l-4.38-4.381A7.942 7.942 0 0 0 19 11c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8a7.948 7.948 0 0 0 4.655-1.507l4.391 4.391 1.767-1.768zM5 11c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
