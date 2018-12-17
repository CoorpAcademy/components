import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zM11.929 20S7.5 17.338 7.5 14.518c0-2.677 3.578-3.84 4.571-.324.993-3.516 4.429-2.354 4.429.324 0 3.041-4.191 5.26-4.571 5.482z"
    />
  </svg>
);

export default SvgComponent;
