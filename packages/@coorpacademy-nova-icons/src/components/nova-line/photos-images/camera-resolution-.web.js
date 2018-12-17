import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.25 8.998H3v1.5h1.5v4.5H6v-5.25a.75.75 0 0 0-.75-.75zM7 9.748v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-2.25a.75.75 0 0 0-.75-.75H8.5v-.75h3v-1.5H7.75a.75.75 0 0 0-.75.75zm1.5 3H10v.75H8.5v-.75zM19.75 8.998h-3a.75.75 0 0 0-.75.75v2.25c0 .414.336.75.75.75H19v.75h-3v1.5h3.75a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zm-.75 2.25h-1.5v-.75H19v.75z" />
      <path d="M22 3.998H2c-1.103 0-2 .896-2 2v12c0 1.102.897 2 2 2h20c1.103 0 2-.898 2-2v-12c0-1.104-.897-2-2-2zm-20 14v-12h20l.001 12H2z" />
      <circle cx={14} cy={9.998} r={1} />
      <circle cx={14} cy={13.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
