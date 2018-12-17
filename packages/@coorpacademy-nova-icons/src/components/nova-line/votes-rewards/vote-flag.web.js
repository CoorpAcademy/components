import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 2.001h2v20H3zM20 6.001h-5v-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1zm-12-2h5v8H8v-8zm11 12h-6l1.8-2.4-.014-.01a.973.973 0 0 0 .214-.59v-5h4v8z" />
    </g>
  </svg>
);

export default SvgComponent;
