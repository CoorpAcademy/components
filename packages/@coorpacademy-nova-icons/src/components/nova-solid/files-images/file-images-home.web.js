import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 19l3-4 2 2 .34-.425C9.399 12.784 12.871 10 17 10c.338 0 .671.023 1 .059V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h6.523A8.956 8.956 0 0 1 8 19H3zm9-18l5 5h-5V1zM5.5 8a2.5 2.5 0 1 1-.002 5.002A2.5 2.5 0 0 1 5.5 8z" />
      <path d="M17.707 12.294a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.415v4.586a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.293 1.414-1.414-6-6zM18 22.001h-2v-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
