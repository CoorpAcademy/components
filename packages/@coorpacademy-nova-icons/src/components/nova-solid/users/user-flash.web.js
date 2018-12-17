import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20.562 11.019C19.547 6.586 18.499 2 12.001 2c-4.411 0-8 3.589-8 8v12h12v-3h1c1.103 0 2-.897 2-2v-3h2.281s-.59-2.408-.72-2.981zM10.001 18v-5h-3l5-7v5h3l-5 7z"
    />
  </svg>
);

export default SvgComponent;
