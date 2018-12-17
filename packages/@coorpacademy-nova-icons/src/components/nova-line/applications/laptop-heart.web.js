import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M23.632 19.734L22 14.837V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11.837L.368 19.734c-.186.558-.11 1.131.208 1.571.317.442.836.695 1.424.695h20c.588 0 1.107-.253 1.425-.694.318-.441.393-1.014.207-1.572zM20 4v10H4V4h16zM2.388 20l1.333-4H20.28l1.333 4H2.388z" />
      <path d="M12 13s4-3 4-6c0-1.106-.896-2-2-2s-2 1-2 2c0-1-.896-2-2-2s-2 .894-2 2c0 3 4 6 4 6zM10 17h4v2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
