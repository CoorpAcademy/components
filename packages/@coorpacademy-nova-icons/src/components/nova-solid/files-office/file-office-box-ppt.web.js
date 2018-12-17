import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.625 10.75H4.75v1.75h.875c.482 0 .875-.393.875-.875s-.393-.875-.875-.875z" />
      <path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM5.625 14.25H4.75V16H3V9h2.625a2.629 2.629 0 0 1 2.625 2.625 2.628 2.628 0 0 1-2.625 2.625zm6 0h-.875V16H9V9h2.625a2.629 2.629 0 0 1 2.625 2.625 2.628 2.628 0 0 1-2.625 2.625zm8.875-3.5h-1.75V16H17v-5.25h-1.75V9h5.25v1.75z" />
      <path d="M11.625 10.75h-.875v1.75h.875c.482 0 .875-.393.875-.875s-.393-.875-.875-.875z" />
    </g>
  </svg>
);

export default SvgComponent;
