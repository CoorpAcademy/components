import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <path fill="currentColor" d="M3 3h5v2H3zM3 9h5v2H3zM3 15h5v2H3z" />
    <circle cx={13} cy={4} r={1} fill="currentColor" />
    <circle cx={16} cy={4} r={1} fill="currentColor" />
    <circle cx={13} cy={10} r={1} fill="currentColor" />
    <circle cx={16} cy={10} r={1} fill="currentColor" />
    <circle cx={13} cy={16} r={1} fill="currentColor" />
    <path
      d="M15 18H2v-4h18V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16c0 1.103.896 2 2 2h13v-2zM2 2h16l-.001 4H2V2zm0 6h15.999l-.001 4H2V8z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M23.707 17.707l-1.414-1.414L20 18.586l-2.293-2.293-1.414 1.414L18.586 20l-2.293 2.293 1.414 1.414L20 21.414l2.293 2.293 1.414-1.414L21.414 20z"
    />
  </svg>
);

export default SvgComponent;
