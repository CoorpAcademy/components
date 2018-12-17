import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.875 10.75a.875.875 0 0 0-.875.875v1.75a.875.875 0 0 0 1.75 0v-1.75a.875.875 0 0 0-.875-.875z" />
      <path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.5 13.375C8.5 14.823 7.322 16 5.875 16S3.25 14.823 3.25 13.375v-1.75C3.25 10.178 4.428 9 5.875 9S8.5 10.178 8.5 11.625v1.75zm6.125-2.625h-1.75V16h-1.75v-5.25h-1.75V9h5.25v1.75zm6.125 0h-3.5v.875h2.625v1.75H17.25V16H15.5v-5.25c0-.965.785-1.75 1.75-1.75h3.5v1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
