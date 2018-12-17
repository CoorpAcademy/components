import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M19 9a7.007 7.007 0 0 0-4.666-6.593L13 1.934V8a1 1 0 0 1-2 0V1.934l-1.334.473A7.007 7.007 0 0 0 5 9c0 2.786 1.639 5.188 4 6.315V22h2v-6h2v6h2v-6.685c2.361-1.127 4-3.53 4-6.315zm-7 5c-2.757 0-5-2.243-5-5 0-1.595.766-3.065 2-3.993V8c0 1.654 1.346 3 3 3s3-1.346 3-3V5.006c1.234.928 2 2.398 2 3.994 0 2.756-2.243 5-5 5z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
