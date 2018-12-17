import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.002-.002h24.001v24.001H-.002z" />
    <g fill="currentColor">
      <path d="M12 2c-5.299 0-9 3.701-9 9 0 5.217 3.014 10.301 3.143 10.515.18.301.505.485.857.485h10a.997.997 0 0 0 .857-.485C17.986 21.301 21 16.217 21 11c0-5.299-3.701-9-9-9zm4.412 18H7.588C6.875 18.665 5 14.79 5 11c0-4.188 2.813-7 7-7s7 2.813 7 7c0 3.79-1.875 7.665-2.588 9z" />
      <path d="M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3 0-1.302.838-2.401 2-2.814V11h2V8.186c1.162.413 2 1.512 2 2.814 0 1.654-1.346 3-3 3zM9 17h6v2H9z" />
    </g>
  </svg>
);

export default SvgComponent;
