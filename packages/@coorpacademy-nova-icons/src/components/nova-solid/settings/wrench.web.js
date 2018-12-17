import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19 9a6.992 6.992 0 0 0-4-6.317V8a3 3 0 1 1-6 0V2.682A6.994 6.994 0 0 0 5 9a6.987 6.987 0 0 0 3 5.74V22h3v-5h2v5h3v-7.26A6.987 6.987 0 0 0 19 9z"
    />
  </svg>
);

export default SvgComponent;
