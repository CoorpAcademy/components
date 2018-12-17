import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 10c.692 0 1.359.098 2 .263V6H0v8c0 1.102.897 2 2 2h8.263c.889-3.448 4.011-6 7.737-6zm-5-2h4v2h-4V8zm-5 5H3v-2h5v2zm2-3H3V8h7v2zM20 2c0-1.102-.896-2-2-2H2C.897 0 0 .898 0 2v2h20V2z" />
      <path d="M18 11.985c-3.309 0-6 2.692-6 6 0 3.307 2.691 6 6 6s6-2.693 6-6c0-3.308-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
