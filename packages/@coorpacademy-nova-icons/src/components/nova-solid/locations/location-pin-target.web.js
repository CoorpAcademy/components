import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M14 9.25h.894a2.997 2.997 0 0 0-2.144-2.144V8h-1.5v-.894A2.998 2.998 0 0 0 9.106 9.25H10v1.5h-.894a2.998 2.998 0 0 0 2.144 2.144V12h1.5v.894a2.997 2.997 0 0 0 2.144-2.144H14v-1.5z" />
      <path d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8zm5 8.75h-1.076a4.002 4.002 0 0 1-3.174 3.174V15h-1.5v-1.076a4.002 4.002 0 0 1-3.174-3.174H7v-1.5h1.076a4.003 4.003 0 0 1 3.174-3.174V5h1.5v1.076a4.003 4.003 0 0 1 3.174 3.174H17v1.5z" />
    </g>
  </svg>
);

export default SvgComponent;
