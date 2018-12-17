import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 10c.338 0 .671.023 1 .059V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h6.523A8.956 8.956 0 0 1 8 19c0-1.44.346-2.794.947-4H3v-2h6v1.889A8.993 8.993 0 0 1 17 10zm-5-9l5 5h-5V1zM3 11V9h9v2H3z" />
      <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.413L13 18.414V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.292 1.414-1.413-6-6zM18 22h-2v-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
