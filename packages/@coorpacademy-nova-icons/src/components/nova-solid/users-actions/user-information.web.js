import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.002 16.007c2.205 0 4-1.794 4-4s-1.795-4-4-4-4 1.794-4 4 1.795 4 4 4zM8.002 17.007c-4.711 0-8 2.468-8 6v1h16v-1c0-3.532-3.289-6-8-6zM18.002.006c-3.309 0-6 2.693-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.307-2.692-6-6-6zm1 10.001h-2v-4h2v4zm0-6a1 1 0 1 1-2 0 1 1 0 1 1 2 0z" />
    </g>
  </svg>
);

export default SvgComponent;
