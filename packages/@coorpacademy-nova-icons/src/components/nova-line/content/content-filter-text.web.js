import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M14 0H2C.896 0 0 .898 0 2v3c0 .256.098.512.293.707L5 10.415V19a1.002 1.002 0 0 0 1.707.707l4-4A.996.996 0 0 0 11 15v-4.586l4.707-4.707A.996.996 0 0 0 16 5V2c0-1.102-.896-2-2-2zM9.293 9.293A1 1 0 0 0 9 10v4.586l-2 2V10a.997.997 0 0 0-.293-.707L2 4.586V2h12v2.586L9.293 9.293z"
      fill="currentColor"
    />
    <path
      d="M23 24H13a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm-9-2h8V12h-8v10z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M15 16h6v2h-6zM17 13h4v2h-4zM15 19h6v2h-6z" />
  </svg>
);

export default SvgComponent;
