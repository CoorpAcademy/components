import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 16.771l4.167-2.976a1.987 1.987 0 0 1-.166-.794L12 13v-1H2c-.193 0-.378.036-.555.088L8 16.771z" />
      <path d="M13.93 15l-5.349 3.813a.995.995 0 0 1-1.162 0l-7.364-5.26A2.003 2.003 0 0 0 0 14v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-7h-2.07zM23 4c0-2.205-1.794-4-4-4s-4 1.795-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6V6h6v5z" />
      <circle cx={19} cy={8} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
