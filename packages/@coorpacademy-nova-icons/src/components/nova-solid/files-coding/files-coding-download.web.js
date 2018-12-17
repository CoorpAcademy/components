import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 12.081V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h10.682A6.971 6.971 0 0 1 12 19.001V14h2s1.689-1.589 4-1.919zM3 8.003h2v4H3v-4zM6 18H3v-4h3v4zm4 0H8v-4h2v4zm0-5.997H7v-4h3v4zM12 1l5 5h-5V1zm0 11.003v-4h2v4h-2z" />
      <path d="M22.293 17.293L20 19.586V14h-2v5.586l-2.293-2.293-1.414 1.413L19 23.414l4.707-4.708z" />
    </g>
  </svg>
);

export default SvgComponent;
