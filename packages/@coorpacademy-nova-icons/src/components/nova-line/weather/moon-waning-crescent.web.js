import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M15.098 20.059C12.494 18.148 11 15.21 11 12c0-3.209 1.494-6.147 4.098-8.058a1 1 0 0 0-.426-1.792A9.935 9.935 0 0 0 13 2C7.486 2 3 6.486 3 12c0 5.515 4.486 10 10 10 .529 0 1.076-.049 1.672-.149a1 1 0 0 0 .426-1.792zM5 12c0-4.079 3.07-7.456 7.021-7.94C10.099 6.235 9 9.063 9 12s1.099 5.765 3.021 7.94C8.07 19.456 5 16.08 5 12z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
