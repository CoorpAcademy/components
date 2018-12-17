import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 20.001h4.141a8.428 8.428 0 0 1-.141-1.5c0-4.525 3.54-8.214 8-8.474V1.001a1 1 0 0 0-1-1H6v20zM4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20z" />
      <path d="M21.5 19.001c-.812 0-1.529.396-1.986.998l-2.562-1.024c.029-.155.048-.312.048-.474s-.019-.319-.048-.474l2.562-1.024a2.492 2.492 0 0 0 1.986.998c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5-2.5 1.121-2.5 2.5c0 .03.008.059.009.089l-2.78 1.112a2.482 2.482 0 0 0-1.729-.701 2.502 2.502 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5.672 0 1.279-.269 1.729-.701l2.78 1.112c-.001.031-.009.059-.009.089 0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z" />
    </g>
  </svg>
);

export default SvgComponent;
