import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M3 9h11v2H3z" />
      <path d="M20 2h-3c-1.103 0-2 .896-2 2v8H4a1 1 0 0 0-1 1c0 2.206 1.794 4 4 4h4.78l-.761 3.804A.998.998 0 0 0 12 22h9a1 1 0 0 0 1-1V4c0-1.104-.897-2-2-2zm0 2v2h-3V4h3zm-6.78 16l.761-3.804A.998.998 0 0 0 13 15H7a2 2 0 0 1-1.731-1H16a1 1 0 0 0 1-1V8h3v12h-6.78z" />
    </g>
  </svg>
);

export default SvgComponent;
