import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.998 2h-16a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1v4l4-4h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-5 3.75a1.251 1.251 0 0 1 0 2.5 1.251 1.251 0 0 1 0-2.5zm-6 0a1.251 1.251 0 0 1 0 2.5 1.251 1.251 0 0 1 0-2.5zm3 8.25a4.997 4.997 0 0 1-4.578-3h9.156a4.997 4.997 0 0 1-4.578 3z"
    />
  </svg>
);

export default SvgComponent;
