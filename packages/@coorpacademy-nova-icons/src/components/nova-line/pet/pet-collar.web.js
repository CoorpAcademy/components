import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 2c-4.411 0-8 3.589-8 8a7.978 7.978 0 0 0 4.314 7.102l.923-1.773A5.989 5.989 0 0 1 6 10c0-3.309 2.691-6 6-6s6 2.691 6 6a5.975 5.975 0 0 1-3.297 5.358l.902 1.785A7.968 7.968 0 0 0 20 10c0-4.411-3.589-8-8-8z" />
      <path d="M13 17.184V16h-2v1.184A2.99 2.99 0 0 0 9 20a3 3 0 0 0 6 0 2.99 2.99 0 0 0-2-2.816zM12 22a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
