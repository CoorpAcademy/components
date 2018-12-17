import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22.919 10.606l-3-7A.999.999 0 0 0 19 3H5c-.4 0-.762.238-.919.606l-3 7A.998.998 0 0 0 2 12h1v8a1 1 0 0 0 1 1h10v-7h4v7h2a1 1 0 0 0 1-1v-8h1a.999.999 0 0 0 .919-1.394zM11 18H6v-4h5v4zm9.483-8h-2.729l-1.428-5h2.015l2.142 5zM8.326 10l1.428-5H11v5H8.326zM13 5h1.246l1.428 5H13V5zM5.659 5h2.015l-1.428 5h-2.73l2.143-5z"
    />
  </svg>
);

export default SvgComponent;
