import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M13 8V5a1 1 0 0 0-1-1H6c-.334 0-.646.167-.832.445l-2 3A.998.998 0 0 0 4 9h1v1.586l-2.707 2.707A.997.997 0 0 0 2 14v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-7a.997.997 0 0 0-.293-.707L10 10.586V9h1v1c0 .265.105.52.293.707l3 3 1.414-1.414L13 9.586V8zM6.535 6H11v1H5.869l.666-1zm1.758 5.707L11 14.414V20H4v-5.586l2.707-2.708A.993.993 0 0 0 7 11V9h1v2c0 .265.105.52.293.707z" />
      <circle cx={15} cy={6} r={1} />
      <circle cx={17} cy={4} r={1} />
      <circle cx={20} cy={2} r={1} />
      <circle cx={20} cy={6} r={1} />
      <circle cx={20} cy={10} r={1} />
      <circle cx={17} cy={8} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
