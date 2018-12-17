import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M11 22c-3.859 0-7-3.141-7-7 0-3.523 5.545-11.652 6.178-12.568.373-.541 1.271-.541 1.645 0 .084.12 2.051 2.977 3.748 6.073a.999.999 0 1 1-1.753.961 74.282 74.282 0 0 0-2.819-4.668C8.793 8.162 6 13.067 6 15c0 2.757 2.243 5 5 5s5-2.243 5-5a1 1 0 1 1 2 0c0 3.859-3.141 7-7 7z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M12 17.414l-3.707-3.707 1.414-1.414L12 14.586l6.293-6.293 1.414 1.414z"
    />
  </svg>
);

export default SvgComponent;
