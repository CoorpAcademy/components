import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <path d="M14 9c-1.63 0-3.146.807-4.072 2.115A3.829 3.829 0 0 0 9 11c-2.206 0-4 1.794-4 4s1.794 4 4 4h5c2.757 0 5-2.243 5-5s-2.243-5-5-5zm0 8H9c-1.103 0-2-.897-2-2s.897-2 2-2c.303 0 .609.079.91.234l.932.48.436-.954A3.004 3.004 0 0 1 14 11c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
    </g>
  </svg>
);

export default SvgComponent;
