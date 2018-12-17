import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M11.843 15.986l-3.828-3.829L13.172 7H4c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h11c1.103 0 2-.897 2-2v-9.171l-5.157 5.157z"
    />
    <path
      fill="currentColor"
      d="M19 2a3 3 0 0 0-3 3c0 .462.113.894.3 1.286l-6.007 6.007 1.414 1.413L17.714 7.7c.391.187.824.3 1.286.3a3 3 0 1 0 0-6z"
    />
  </svg>
);

export default SvgComponent;
