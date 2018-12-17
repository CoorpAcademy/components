import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M5 4.414V8h2V4.414l1.293 1.293 1.414-1.414L6 .586 2.293 4.293l1.414 1.414zM20.707 4.707l-1.414-1.414L18 4.586V1h-2v3.586l-1.293-1.293-1.414 1.414L17 8.414zM20 10H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm-3.5 3c1.101 0 2 .902 2 2 0 1.099-.899 2-2 2s-2-.901-2-2c0-1.098.899-2 2-2zm-9 0c1.101 0 2 .902 2 2 0 1.099-.899 2-2 2s-2-.901-2-2c0-1.098.899-2 2-2zM4 21a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3H4zm9 0a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3h-7z" />
    </g>
  </svg>
);

export default SvgComponent;
