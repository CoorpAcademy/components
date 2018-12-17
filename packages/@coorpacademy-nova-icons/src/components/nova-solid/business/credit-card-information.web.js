import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 10c.691 0 1.359.098 2 .263V6H0v8c0 1.102.897 2 2 2h8.262c.89-3.448 4.011-6 7.738-6zm-5-2h4v2h-4V8zm-5 5H3v-2h5v2zm2-3H3V8h7v2zM20 2c0-1.102-.896-2-2-2H2C.897 0 0 .898 0 2v2h20V2z" />
      <path d="M18 11.999c-3.309 0-6 2.694-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.306-2.692-6-6-6zm1 10h-2v-4h2v4zM18 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
