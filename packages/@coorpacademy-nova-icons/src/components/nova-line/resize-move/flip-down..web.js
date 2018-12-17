import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .006h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 1.999H4a2 2 0 0 0-2 2v5h2v-5h16v5h2v-5c0-1.103-.896-2-2-2zM2 14.999h2v2H2zM20 14.999h2v2h-2zM4 18.999H2v1a2 2 0 0 0 2 2h1v-2H4v-1zM20 19.999h-1v2h1a2 2 0 0 0 2-2v-1h-2v1zM7 19.999h2v2H7zM15 19.999h2v2h-2zM11 19.999h2v2h-2z" />
      <path d="M12 14.585v-3.586a2 2 0 0 1 2-2v-2c-2.205 0-4 1.795-4 4v3.586l-1.293-1.293-1.414 1.414L11 18.413l3.707-3.707-1.414-1.414L12 14.585zM2 10.999h5v2H2zM15 10.999h7v2h-7z" />
    </g>
  </svg>
);

export default SvgComponent;
