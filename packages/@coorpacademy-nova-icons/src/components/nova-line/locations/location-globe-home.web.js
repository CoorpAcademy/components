import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M2 10c0-2.021.759-3.864 2-5.274V10h2.279l2.211 6.633L14 12.5V6h-3V2.069c3.94.495 7 3.859 7 7.931h2c0-5.514-4.486-10-10-10S0 4.486 0 10a9.966 9.966 0 0 0 8.979 9.948l.202-1.989A7.972 7.972 0 0 1 2 10zm10-2v3.5l-2.49 1.867L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3zM19 22h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z" />
      <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L17 14.414l5.293 5.292 1.414-1.414-6-5.999z" />
    </g>
  </svg>
);

export default SvgComponent;
