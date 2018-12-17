import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M12 6l-5 4h2v3h2v-2h2v2h2v-3h2z" />
      <path d="M12 2c-4.411 0-8 3.589-8 8s4.644 9.44 8 12.318c3.354-2.876 8-7.906 8-12.318 0-4.411-3.589-8-8-8zm0 17.654C9.87 17.657 6 13.338 6 10c0-3.309 2.691-6 6-6s6 2.691 6 6c0 3.338-3.87 7.657-6 9.654z" />
    </g>
  </svg>
);

export default SvgComponent;
