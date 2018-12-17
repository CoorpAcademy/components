import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2h20V2zM13 9.683V8h4v1.08a6.96 6.96 0 0 1 3 1.18V6H0v8c0 1.102.896 2 2 2h7a6.994 6.994 0 0 1 4-6.317zM8 13H3v-2h5v2zm2-3H3V8h7v2z" />
      <path d="M20.167 18.753A4.961 4.961 0 0 0 21 16c0-2.756-2.243-5-5-5s-5 2.244-5 5c0 2.757 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.415 23.414 22l-3.247-3.247zM16 19c-1.654 0-3-1.345-3-3 0-1.653 1.346-3 3-3s3 1.347 3 3c0 1.655-1.346 3-3 3z" />
    </g>
  </svg>
);

export default SvgComponent;
