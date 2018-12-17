import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 12v-1.4c1.736.922 4.374 1.4 7 1.4s5.264-.478 7-1.4l2-.6V4c0-2.626-4.527-4-9-4S0 1.374 0 4v12c0 2.626 4.527 4 9 4 1.752 0 3.507-.214 5-.628v-2.086c-1.176.396-2.851.714-5 .714-4.547 0-7-1.42-7-2v-1.4c1.736.922 4.374 1.4 7 1.4 1.754 0 3.508-.218 5-.635v-2.079c-1.176.396-2.851.714-5 .714-4.547 0-7-1.42-7-2zM9 2c4.547 0 7 1.42 7 2s-2.453 2-7 2-7-1.42-7-2 2.453-2 7-2zM2 6.6C3.736 7.522 6.374 8 9 8s5.264-.478 7-1.4V8c0 .58-2.453 2-7 2S2 8.58 2 8V6.6zM21 17h-2c-.551 0-1-.449-1-1s.449-1 1-1h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2c.551 0 1 .449 1 1s-.449 1-1 1h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
