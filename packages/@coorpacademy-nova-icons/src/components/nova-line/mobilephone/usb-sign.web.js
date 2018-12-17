import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 8a2 2 0 0 0-4 0c0 .738.405 1.376 1 1.723V10c0 1.654-1.346 3-3 3h-1V7h1.667L12 3 9.333 7H11v10h-1c-1.654 0-3-1.346-3-3v-1.277A1.994 1.994 0 0 0 6 9a1.994 1.994 0 1 0-1 3.723V14c0 2.757 2.243 5 5 5h1v3h2v-7h1c2.757 0 5-2.243 5-5v-.277c.595-.347 1-.985 1-1.723z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
