import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 10.535l7.171 7.16A9.934 9.934 0 0 0 22 11.949C22 6.773 18.046 2.503 13 2v8.535zM11 21.899v-8.538l-5.856 5.848A9.953 9.953 0 0 0 11 21.899zM11 10.535V2c-5.046.503-9 4.773-9 9.949 0 2.139.681 4.119 1.829 5.746L11 10.535zM13 13.361v8.538a9.955 9.955 0 0 0 5.856-2.69L13 13.361z" />
    </g>
  </svg>
);

export default SvgComponent;
