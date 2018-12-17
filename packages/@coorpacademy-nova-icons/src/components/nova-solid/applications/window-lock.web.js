import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 3H4c-1.103 0-2 .897-2 2v2.002h20V5c0-1.103-.896-2-2-2zM5 6a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM12 12.003c-.551 0-1 .448-1 1h2c0-.552-.449-1-1-1z" />
      <path d="M2 19c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2V8.002H2V19zm6-4.997a1 1 0 0 1 1-1c0-1.654 1.346-3 3-3s3 1.346 3 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-5z" />
      <circle cx={12} cy={17.003} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
