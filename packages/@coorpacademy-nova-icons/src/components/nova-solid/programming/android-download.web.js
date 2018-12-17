import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 5.999a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.963 4.963 0 0 0-.833-2.752l1.54-1.54L12.293.292l-1.54 1.54a4.972 4.972 0 0 0-5.506 0L3.707.292 2.293 1.707l1.54 1.54A4.97 4.97 0 0 0 3 5.999zM16 12.68V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 .309-.062A6.942 6.942 0 0 1 13 15.406V10h1v4.103a7.02 7.02 0 0 1 2-1.423zM22.294 17.29L20 19.581v-5.585h-2v5.585l-2.292-2.291-1.415 1.413L19 23.41l4.708-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
