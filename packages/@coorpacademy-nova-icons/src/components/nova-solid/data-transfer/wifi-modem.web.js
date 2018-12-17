import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 14.002h-7v-7h-2v7H4c-1.103 0-2 .896-2 2v4c0 1.102.897 2 2 2v1h2v-1h12v1h2v-1c1.104 0 2-.898 2-2v-4a2 2 0 0 0-2-2zm-8 4.999H4v-2h8v2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM19.637 12.708l-1.414-1.414a6.08 6.08 0 0 0 0-8.586l1.414-1.414c3.146 3.147 3.146 8.267 0 11.414z"
    />
    <path
      fill="currentColor"
      d="M16.707 10.486l-1.414-1.414a2.933 2.933 0 0 0 0-4.142l1.414-1.413a4.933 4.933 0 0 1 0 6.969zM4.363 12.708c-3.146-3.147-3.146-8.267 0-11.414l1.414 1.414a6.08 6.08 0 0 0 0 8.586l-1.414 1.414z"
    />
    <path
      fill="currentColor"
      d="M7.293 10.486a4.933 4.933 0 0 1 0-6.969L8.707 4.93a2.933 2.933 0 0 0 0 4.142l-1.414 1.414z"
    />
  </svg>
);

export default SvgComponent;
