import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.001h24v24.002h-24z" />
    <path
      fill="currentColor"
      d="M19.784 9.909C18.872 8.439 16.659 6 12 6S5.128 8.439 4.216 9.909L2 4v6c0 5.523 4.477 10 10 10s10-4.477 10-10V4l-2.216 5.909zM14 16l-1-3h-2l-1 3c-3.844 0-4.776-3.404-5.387-5.033 1.607-.086 4.942-.41 7.387-1.634 2.445 1.224 5.78 1.548 7.387 1.634C18.851 12.398 17.945 16 14 16z"
    />
  </svg>
);

export default SvgComponent;
