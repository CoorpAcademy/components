import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 10h4v4H4zM10 16h4v4h-4zM4 16h4v4H4zM18 .001c-3.309 0-6 2.694-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.307-2.692-6-6-6zM19 10h-2V6h2v4zm-1-4.999a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      <path d="M16 22H2V8h8.262A7.984 7.984 0 0 1 10 6.001H0v18h18V14c-.692 0-1.36-.097-2-.262V22z" />
      <path d="M11.079 10H10v4h4v-1.079A8.022 8.022 0 0 1 11.079 10z" />
    </g>
  </svg>
);

export default SvgComponent;
