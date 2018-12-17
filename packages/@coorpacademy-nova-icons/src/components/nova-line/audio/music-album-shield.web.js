import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.5 14.825V18A1.5 1.5 0 1 0 7 19.5v-4.131l3.5-1.141V17a1.5 1.5 0 1 0 1.5 1.5v-5.306a.753.753 0 0 0-.983-.712l-5 1.63a.75.75 0 0 0-.517.713z" />
      <path d="M14.001 22H2V11h9V9H2c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8h-2l.001 8zM12 0v7c0 3.813 3.796 5.579 5.804 5.98l.196.041.196-.04C20.204 12.579 24 10.813 24 7V0H12zm10 7c0 2.763-3.154 3.757-3.998 3.973C17.175 10.757 14 9.749 14 7V2h8v5z" />
      <path d="M17 9h2V7h2V5h-2V3h-2v2h-2v2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
