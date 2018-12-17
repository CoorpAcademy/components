import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 17.999v-12h12.72l2-2H2c-1.103 0-2 .897-2 2v12c0 .737.404 1.374.999 1.721l1.721-1.721H2z" />
      <path d="M22.342 4.035l1.365-1.366-1.414-1.414L8.25 15.298v-6.3H6.5v2.625H4.75V8.999H3v7h1.75v-2.625H6.5v2.625h1.049l-6.293 6.293 1.414 1.414 3.707-3.707H22c1.103 0 2-.897 2-2v-12c0-.986-.718-1.803-1.658-1.964zM8.377 17.999l2-2H11.5c1.931 0 3.5-1.569 3.5-3.5 0-.338-.064-.658-.156-.967l.906-.906v5.373h1.75v-1.75h.453l1.021 1.75H21l-1.253-2.148A2.617 2.617 0 0 0 21 11.624a2.629 2.629 0 0 0-2.625-2.625h-.998l3-3H22l.001 12H8.377zm9.998-5.5H17.5v-1.75h.875c.482 0 .875.393.875.875s-.393.875-.875.875z" />
      <path d="M9.75 10.969l1.95-1.951c-.068-.003-.132-.02-.2-.02H9.75v1.971z" />
    </g>
  </svg>
);

export default SvgComponent;
