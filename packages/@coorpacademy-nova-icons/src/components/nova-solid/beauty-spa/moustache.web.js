import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.001h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M10.639 11.585a2.654 2.654 0 0 0-2.687.061C3.584 14.347 1 10.902 1 10.902s1 7 8 6c1.641-.234 3-1.344 3-3 0-.962-.521-1.849-1.361-2.317zM16.048 11.646A2.654 2.654 0 0 0 12 13.902c0 1.656 1.359 2.766 3 3 7 1 8-6 8-6s-2.584 3.445-6.952.744z" />
    </g>
  </svg>
);

export default SvgComponent;
