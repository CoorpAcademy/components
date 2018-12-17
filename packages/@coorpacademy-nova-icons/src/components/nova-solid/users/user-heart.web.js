import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20.562 11.019C19.547 6.586 18.499 2 12.001 2c-4.411 0-8 3.589-8 8v12h12v-3h1c1.103 0 2-.897 2-2v-3h2.281s-.59-2.408-.72-2.981zm-8.561 2.969s-4-2.908-4-5.064c0-2.047 3.111-2.937 4-.248.889-2.688 4-1.799 4 .248 0 2.156-4 5.064-4 5.064z"
    />
  </svg>
);

export default SvgComponent;
