import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M22.479 9.716l-10-5.455a1 1 0 0 0-.958 0l-10 5.455a.999.999 0 0 0-.521.878V12a1 1 0 0 0 1 1h1v8a1 1 0 0 0 1 1h2v-8h12v8h2a1 1 0 0 0 1-1v-8h1a1 1 0 0 0 1-1v-1.406c0-.367-.2-.703-.521-.878z" />
      <path d="M8 16h8v2H8zM8 20h8v2H8z" />
    </g>
  </svg>
);

export default SvgComponent;
