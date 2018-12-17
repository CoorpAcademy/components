import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12.406 13.875h-1.031v.688h1.031a.345.345 0 0 0 0-.688zM3 3v18a1 1 0 0 0 1 1h3V2H4a1 1 0 0 0-1 1z" />
      <path d="M20 2H8v20h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-5.875 14.281A1.72 1.72 0 0 1 12.406 18H10v-5.5h2.406a1.72 1.72 0 0 1 1.719 1.719 1.7 1.7 0 0 1-.352 1.031c.218.288.352.643.352 1.031zm-.875-7.156V10.5h-1.375V5.688c0-.38.308-.688.688-.688h2.75c.379 0 .687.308.687.688V10.5h-1.375V9.125H13.25zm5.75 4.75h-2.062a.69.69 0 0 0-.688.688v1.375c0 .379.308.688.688.688H19V18h-2.062a2.064 2.064 0 0 1-2.062-2.062v-1.375c0-1.137.925-2.062 2.062-2.062H19v1.374z" />
      <path d="M12.406 15.938h-1.031v.688h1.031a.345.345 0 0 0 0-.688zM13.25 6.375h1.375V7.75H13.25z" />
    </g>
  </svg>
);

export default SvgComponent;
