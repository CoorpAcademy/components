import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM7.625 10.75h-1.75V16h-1.75v-5.25h-1.75V9h5.25v1.75zM10.25 16H8.5V9h1.75v7zm11.375-5.25h-3.5v.875h2.625v1.75h-2.625V16h-1.75v-5.25h-3.5v.875H15.5v1.75h-2.625V16h-1.75v-5.25c0-.965.785-1.75 1.75-1.75h3.5v1.75c0-.965.785-1.75 1.75-1.75h3.5v1.75z"
    />
  </svg>
);

export default SvgComponent;
