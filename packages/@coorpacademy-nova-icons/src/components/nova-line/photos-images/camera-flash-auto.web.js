import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 9.998c0-4.412 3.589-8 8-8s8 3.588 8 8c0 .691-.098 1.359-.263 2h2.062a9.998 9.998 0 0 0 .202-2c0-5.515-4.486-10-10-10s-10 4.485-10 10c0 5.514 4.486 10 10 10a9.98 9.98 0 0 0 3-.461v-2.128a7.95 7.95 0 0 1-3 .589c-4.412 0-8.001-3.59-8.001-8z" />
      <path d="M15 8.998h-4v-6l-6 8h4v6zM21 13.998h-5a1 1 0 0 0-1 1v9h2v-3h3v3h2v-9a1 1 0 0 0-1-1zm-4 5v-3h3v3h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
