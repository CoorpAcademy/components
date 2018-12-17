import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M22 12l-9.899-9.899-1.414 1.413 1.415 1.415v.001L7.151 9.879v.001L5.736 8.465 4.322 9.88l4.243 4.242-5.657 5.656 1.414 1.414 5.657-5.656 4.243 4.242 1.414-1.414-1.414-1.415 4.95-4.95 1.414 1.414L22 12zm-9.191 3.535l-.001.001-4.242-4.243 4.949-4.95 4.242 4.243-4.948 4.949z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
