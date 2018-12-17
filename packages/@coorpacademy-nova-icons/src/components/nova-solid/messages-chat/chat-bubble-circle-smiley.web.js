import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M11.998 3c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.573 4.836L.998 21h11c5.514 0 10-4.037 10-9s-4.486-9-10-9zm3 5a1.251 1.251 0 0 1 0 2.5 1.251 1.251 0 0 1 0-2.5zm-6 0a1.251 1.251 0 0 1 0 2.5 1.251 1.251 0 0 1 0-2.5zm3 8a4.997 4.997 0 0 1-4.578-3h9.156a4.997 4.997 0 0 1-4.578 3z"
    />
  </svg>
);

export default SvgComponent;
