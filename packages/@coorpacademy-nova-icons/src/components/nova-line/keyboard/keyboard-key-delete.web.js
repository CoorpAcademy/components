import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-.003 18H4V4h16l-.003 16z" />
      <path d="M8.293 15.707A.997.997 0 0 0 9 16h9a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H9c-.265 0-.52.106-.707.293l-3 3a.999.999 0 0 0 0 1.414l3 3zm3-5l1.414-1.414L14 10.586l1.293-1.293 1.414 1.414L15.414 12l1.293 1.293-1.414 1.414L14 13.414l-1.293 1.292-1.414-1.414L12.586 12l-1.293-1.293z" />
    </g>
  </svg>
);

export default SvgComponent;
