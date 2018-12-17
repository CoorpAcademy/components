import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 7h-2v1.051c-1.14.232-2 1.242-2 2.449 0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h2v1h2v-1.051c1.14-.232 2-1.243 2-2.449 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15V8h-2V7z" />
      <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10 5.515 0 10-4.485 10-10 0-5.514-4.485-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
    </g>
  </svg>
);

export default SvgComponent;
