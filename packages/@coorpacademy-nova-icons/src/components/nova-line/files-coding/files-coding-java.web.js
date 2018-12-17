import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3.003h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .896-2 2v5h2V3.003zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM6 15.003v3h2v-2h2v2h2v-7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v-1H4v5a1.001 1.001 0 0 1-2 0H0c0 1.654 1.346 3 3 3s3-1.345 3-3zm2-3h2v2H8v-2zM15.942 10.003l-.957 3.902L14 10.003h-2l1.963 8h2.058L16 17.922l2-7.919zM23 10.003h-4a1 1 0 0 0-1 1v7h2v-2h2v2h2v-7a1 1 0 0 0-1-1zm-1 4h-2v-2h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
