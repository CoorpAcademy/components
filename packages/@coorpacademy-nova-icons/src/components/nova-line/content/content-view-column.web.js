import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <path
      d="M20 21h-2c-1.104 0-2-.897-2-2V5c0-1.103.896-2 2-2h2c1.104 0 2 .897 2 2v14c0 1.103-.896 2-2 2zM18 5v14h1.997L20 5h-2zM13 21h-2c-1.104 0-2-.897-2-2V5c0-1.103.896-2 2-2h2c1.104 0 2 .897 2 2v14c0 1.103-.896 2-2 2zM11 5v14h1.997L13 5h-2zM6 21H4c-1.104 0-2-.897-2-2V5c0-1.103.896-2 2-2h2c1.104 0 2 .897 2 2v14c0 1.103-.896 2-2 2zM4 5v14h1.997L6 5H4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
