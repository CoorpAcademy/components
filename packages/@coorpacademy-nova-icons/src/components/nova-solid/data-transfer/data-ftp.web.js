import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .007h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 13.001v-2H4v-1h4v-2H4c-1.103 0-2 .896-2 2v6h2v-3h3zM13 16.001v-6h2v-2H9v2h2v6zM19 8.001h-3v8h2v-2h1c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4h-1v-2h1c.551 0 1 .449 1 1 0 .551-.449 1-1 1zM12 23.415l6.414-6.414H5.586zM12 .587L5.586 7.001h12.828z" />
    </g>
  </svg>
);

export default SvgComponent;
