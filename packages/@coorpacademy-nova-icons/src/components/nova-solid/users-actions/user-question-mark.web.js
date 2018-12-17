import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M8 16.006c2.205 0 4-1.795 4-4s-1.795-4-4-4c-2.206 0-4 1.795-4 4a4.005 4.005 0 0 0 4 4zM8 17.006c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.29-6-8-6zM21 9.006h-2v-3h1c1.103 0 2-.898 2-2a2 2 0 0 0-4 0h-2c0-2.205 1.794-4 4-4 2.205 0 4 1.795 4 4a4.01 4.01 0 0 1-3 3.874v1.126z"
    />
    <circle fill="currentColor" cx={20} cy={11.006} r={1} />
  </svg>
);

export default SvgComponent;
