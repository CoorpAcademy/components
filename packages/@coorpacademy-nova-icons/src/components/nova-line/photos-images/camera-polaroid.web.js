import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 20.998H8v-5H6v7h12v-7h-2zM9 5.998c0 1.655 1.346 3 3 3s3-1.345 3-3c0-1.654-1.346-3-3-3s-3 1.346-3 3zm3-1c.551 0 1 .449 1 1 0 .551-.449 1-1 1s-1-.449-1-1c0-.551.449-1 1-1z" />
      <path d="M21.995 13.998a.993.993 0 0 0-.163-.555L20 10.695V2.998c0-1.104-.897-2-2-2H6c-1.103 0-2 .896-2 2v7.697l-1.832 2.748a.99.99 0 0 0-.163.555H2v4c0 .551.448 1 1 1h2v-2H4v-2h16v2h-1v2h2c.552 0 1-.449 1-1v-4h-.005zM6 2.998h12v7H6v-7zm-1.131 10l.667-1h12.93l.667 1H4.869z" />
      <circle cx={8} cy={8.498} r={1} />
      <path d="M9 15.998h6v3H9z" />
    </g>
  </svg>
);

export default SvgComponent;
