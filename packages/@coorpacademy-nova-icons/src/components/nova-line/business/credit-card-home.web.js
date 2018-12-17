import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <path d="M2 7h15.999l-.001 4H20V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12c0 1.103.896 2 2 2h7v-2H2V7zm16-5v3H2V2h16zM19 21.985h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z" />
      <path d="M17.707 12.277a1 1 0 0 0-1.414 0l-6 6 1.414 1.415L17 14.399l5.293 5.293 1.414-1.415-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
