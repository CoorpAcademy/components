import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24.002h-24z" />
    <path
      d="M13.499 9.592A2.995 2.995 0 0 0 15 7c0-1.654-1.346-3-3-3S9 5.346 9 7h2c0-.551.449-1 1-1s1 .449 1 1-.449 1-1 1a1 1 0 0 0-1 1v.358C8.277 10.619 2 13.867 2 17a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1c0-2.952-5.578-6.009-8.501-7.408zM4.486 16c1.191-1.449 4.392-3.465 7.514-4.902 3.122 1.438 6.322 3.453 7.514 4.902H4.486z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
