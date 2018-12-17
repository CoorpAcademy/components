import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.998 2h-16a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1v4l4-4h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-12 13h-2V6h2v9zm5 0h-2v-5h2v5zm5 0h-2V8h2v7z"
    />
  </svg>
);

export default SvgComponent;
