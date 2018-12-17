import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path fill="currentColor" d="M21 11.001h-8v-8h-2v8H3v2h8v8h2v-8h8z" />
  </svg>
);

export default SvgComponent;
