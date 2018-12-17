import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .004h24v24H0z" />
    <path fill="currentColor" d="M3 3h5v2H3zM3 9h5v2H3zM3 15h5v2H3z" />
    <circle cx={13} cy={4} r={1} fill="currentColor" />
    <circle cx={16} cy={4} r={1} fill="currentColor" />
    <circle cx={13} cy={10} r={1} fill="currentColor" />
    <circle cx={16} cy={10} r={1} fill="currentColor" />
    <path
      d="M12 18H2v-4h10v-2H2V8h15.999l-.001 3.999L18 12h2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16c0 1.103.896 2 2 2h10v-2zM2 2h16l-.001 4H2V2zM23.707 19.292L19 14.585l-4.707 4.707 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
