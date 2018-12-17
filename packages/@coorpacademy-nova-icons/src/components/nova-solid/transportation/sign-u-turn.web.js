import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <path
      fill="currentColor"
      d="M22.192 11.293l-8.485-8.485a.999.999 0 0 0-1.414 0l-8.485 8.485a.998.998 0 0 0 0 1.413l8.485 8.486a.999.999 0 0 0 1.414 0l8.485-8.486a.998.998 0 0 0 0-1.413zM15 15l-2-3h1v-2c0-.551-.449-1-1-1s-1 .449-1 1v7h-2v-7c0-1.654 1.346-3 3-3s3 1.346 3 3v2h1l-2 3z"
    />
  </svg>
);

export default SvgComponent;
