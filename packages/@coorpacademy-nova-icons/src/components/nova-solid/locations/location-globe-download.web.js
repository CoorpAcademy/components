import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M19 12c.267 0 .529.018.789.047.137-.66.211-1.345.211-2.047 0-4.1-2.47-7.619-6-9.162V4h-3v3h3v3l-3 1-2 5-5-3V7l3-2V.46C2.943 1.734 0 5.523 0 10c0 5.523 4.477 10 10 10 .702 0 1.386-.074 2.047-.21A7 7 0 0 1 19 12zM22.293 17.292L20 19.585V14h-2v5.585l-2.293-2.293-1.414 1.414L19 23.413l4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
