import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M21 12v1c0 .551-.449 1-1 1h-5v2h5c1.654 0 3-1.346 3-3v-1h-2zM19 17h2v4h-2zM12 2H4c-1.103 0-2 .896-2 2v6h2V8h8v2h2V4c0-1.104-.897-2-2-2zM4 4h3v2H4V4zm5 2V4h3v2H9zM8 10c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm3.924 5.25H8.75v-3.174a4.003 4.003 0 0 1 3.174 3.174zM7.25 12.076v3.174H4.076a4.003 4.003 0 0 1 3.174-3.174zM4.076 16.75H7.25v3.174a4.002 4.002 0 0 1-3.174-3.174zm4.674 3.174V16.75h3.174a4.002 4.002 0 0 1-3.174 3.174z" />
    </g>
  </svg>
);

export default SvgComponent;
