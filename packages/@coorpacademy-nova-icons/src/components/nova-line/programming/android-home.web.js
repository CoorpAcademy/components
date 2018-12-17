import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.966 4.966 0 0 0-.833-2.753l1.54-1.54L12.293.293l-1.54 1.54a4.964 4.964 0 0 0-5.506 0L3.707.293 2.293 1.707l1.54 1.54A4.972 4.972 0 0 0 3 6zm5-3c1.304 0 2.416.836 2.829 2H5.172A3.002 3.002 0 0 1 8 3zM19 21.978h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z" />
      <path d="M17.707 12.271a.999.999 0 0 0-1.414 0l-6 6 1.414 1.415L17 14.392l5.293 5.293 1.414-1.415-6-5.999zM5 10h6v1h2v-1h1v1h2V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v-2H5v-5z" />
    </g>
  </svg>
);

export default SvgComponent;
