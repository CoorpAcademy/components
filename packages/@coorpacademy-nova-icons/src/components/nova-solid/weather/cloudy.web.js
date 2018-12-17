import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M15 7.002a6.962 6.962 0 0 0-5.979 3.356c.966.458 1.996 1.264 2.971 2.648l-.817.575c-1.497-2.125-2.782-2.58-4.175-2.58-2.757 0-5 2.243-5 5s2.243 5 5 5h8c3.86 0 7-3.14 7-7 0-3.858-3.14-6.999-7-6.999z"
    />
  </svg>
);

export default SvgComponent;
