import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M6.506 12L11 6.222 15.495 12h1.9L11.75 4.743V1h-1.5v3.743L4.605 12zM20 13H4c-2.113 0-4 1.73-4 4 0 2.205 1.794 4 4 4h16c2.206 0 4-1.795 4-4s-1.794-4-4-4zM2 17c0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2s-2-.897-2-2zm18 2H7.443A3.953 3.953 0 0 0 8 17c0-.731-.212-1.409-.557-2H20c1.103 0 2 .896 2 2 0 1.103-.897 2-2 2z" />
      <path d="M10 16h4v2h-4zM18 16h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
