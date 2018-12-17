import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.707 10.707L15 12V8h-4l1.293 1.293-4 4L7 12v4h4l-1.293-1.293z" />
      <path d="M20 0H10C8.897 0 8 .898 8 2v8h2V5h10v8h-7v2h7v1h-8v2h8c1.103 0 2-.896 2-2V2c0-1.102-.897-2-2-2zM10 3V2h10v1H10zM8 19H4v-5h1v-2H4c-1.103 0-2 .898-2 2v8c0 1.104.897 2 2 2h4c1.103 0 2-.896 2-2v-4H8v1zm-4 3v-1h4v1H4z" />
    </g>
  </svg>
);

export default SvgComponent;
