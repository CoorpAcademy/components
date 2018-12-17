import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M18 13c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c.462 0 .894.114 1.285.301l-3.984 3.985A2.955 2.955 0 0 1 15 18c0-1.654 1.346-3 3-3zm0 6c-.462 0-.894-.113-1.285-.3l3.984-3.985c.188.391.301.824.301 1.285 0 1.654-1.346 3-3 3zM11.286 11.44L8.758 18l2.982-1.549 3.636-6.642L19.91 7.81c.412-.178.729-.514.891-.932a1.678 1.678 0 0 0-2.188-2.158l-4.655 2.072-5.512-3.49L5.78 4.684c.267.173 5.053 3.36 5.369 3.36L7.115 9.84 3.628 8.281 1 9.796l6.637 3.328 3.649-1.684zM2 21h10v2H2z" />
    </g>
  </svg>
);

export default SvgComponent;
