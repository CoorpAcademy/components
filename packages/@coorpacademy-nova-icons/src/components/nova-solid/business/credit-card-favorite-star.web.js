import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2h20V2zM18 10c.691 0 1.359.098 2 .263V6H0v8c0 1.102.896 2 2 2h8.262c.889-3.448 4.011-6 7.738-6zm-5-2h4v2h-4V8zm-5 5H3v-2h5v2zm2-3H3V8h7v2zM24 16.287h-4.286L18 12l-1.715 4.287H12l3.708 3.129L13.714 24 18 21.166 22.285 24l-1.993-4.584z" />
    </g>
  </svg>
);

export default SvgComponent;
