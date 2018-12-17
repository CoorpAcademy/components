import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24H0z" />
    <g fill="currentColor">
      <path d="M7.999 2.998h7v-2h-7v-1h-2v5h2zM14.706 13.291a.997.997 0 0 0-.707-.293h-4a1 1 0 0 0-.707.293l-2 2a.999.999 0 0 0 0 1.414l4 4c.195.195.451.292.707.292s.512-.097.707-.292l4-4a.999.999 0 0 0 0-1.414l-2-2zm-2.707 5.293l-2.586-2.586 1-1h3.172l1 1-2.586 2.586zM10.999 8.998h2v3h-2zM15.705 12.826l-1.413-1.415 2.122-2.12 1.414 1.414zM7.585 9.291l2.121 2.122-1.414 1.414-2.121-2.121z" />
      <path d="M22.999.998h-5v-1h-2v5h2v-2h4v3h-20v-3h3v-2h-4a1 1 0 0 0-1 1v21a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-21a1 1 0 0 0-1-1zm-21 21v-14h20v14h-20z" />
    </g>
  </svg>
);

export default SvgComponent;
