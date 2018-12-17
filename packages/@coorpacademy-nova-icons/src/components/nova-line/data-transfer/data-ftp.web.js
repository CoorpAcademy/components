import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .007h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 10.001h4v-2H4a2 2 0 0 0-2 2v6h2v-3h3v-2H4v-1zM13 16.001v-6h2v-2H9v2h2v6zM19 8.001h-3v8h2v-2h1c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4h-1v-2h1c.551 0 1 .449 1 1s-.449 1-1 1zM12 20.587l-3.293-3.293-1.414 1.414L12 23.415l4.707-4.707-1.414-1.414zM12 3.415l3.293 3.293 1.414-1.414L12 .587 7.293 5.294l1.414 1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
