import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6.707 5.707L5.293 4.293 1.586 8l3.707 3.707 1.414-1.414L5.414 9H7V7H5.414zM19.707 4.293l-1.414 1.414L19.586 7H18v2h1.586l-1.293 1.293 1.414 1.414L23.414 8zM12.5 6A4.505 4.505 0 0 0 8 10.5V22h9V10.5C17 8.019 14.981 6 12.5 6zM15 20h-5v-9.5C10 9.122 11.122 8 12.5 8S15 9.122 15 10.5V20z" />
      <path d="M12.5 9c-.827 0-1.5.673-1.5 1.5V12h3v-1.5c0-.827-.673-1.5-1.5-1.5z" />
    </g>
  </svg>
);

export default SvgComponent;
