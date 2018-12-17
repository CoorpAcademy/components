import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20.562 11.019C19.547 6.586 18.499 2 12.001 2c-4.411 0-8 3.589-8 8v12h12v-3h1c1.103 0 2-.897 2-2v-3h2.281s-.59-2.408-.72-2.981zM15.001 9h-3.5a.5.5 0 0 0 0 1h1c1.378 0 2.5 1.121 2.5 2.5 0 1.207-.86 2.217-2 2.449V16h-2v-1h-2v-2h3.5a.5.5 0 0 0 0-1h-1a2.503 2.503 0 0 1-2.5-2.5c0-1.207.86-2.217 2-2.449V6h2v1h2v2z"
    />
  </svg>
);

export default SvgComponent;
