import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.25 16H6.281l-.656-1.4-.656 1.4H3l1.641-3.5L3 9h1.969l.656 1.4.656-1.4H8.25l-1.641 3.5L8.25 16zM14 16H9.625V9h1.75v5.25H14V16zm7-5.25h-3.062a.439.439 0 0 0 0 .876h.875a2.19 2.19 0 0 1 2.188 2.188A2.19 2.19 0 0 1 18.812 16H15.75v-1.75h3.062a.439.439 0 0 0 0-.876h-.875a2.19 2.19 0 0 1-2.188-2.188A2.192 2.192 0 0 1 17.938 9H21v1.75z"
    />
  </svg>
);

export default SvgComponent;
