import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 .008c-1.103 0-2 .896-2 2v18c0 1.102.897 2 2 2h14c1.103 0 2-.898 2-2V4.594L13.414.009H2zm1 8.003h2v4H3v-4zm3 9.997H3v-4h3v4zm4 0H8v-4h2v4zm0-5.997H7v-4h3v4zm4 5.997h-2v-4h2v4zm0-5.997h-2v-4h2v4zm-2-6.003v-5l5 5h-5zM20 14.009h2v6h-2z" />
      <circle cx={21} cy={22.001} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
