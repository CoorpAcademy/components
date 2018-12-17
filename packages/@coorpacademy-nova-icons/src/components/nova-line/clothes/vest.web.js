import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M20.929 18.629L19 13.808V5a1 1 0 0 0-1-1h-3a1 1 0 0 0-.8.4L12 7.334 9.8 4.4A1 1 0 0 0 9 4H6a1 1 0 0 0-1 1v8.808l-1.929 4.821A1.001 1.001 0 0 0 4 20h6c.266 0 .52-.105.707-.293L12 18.414l1.293 1.292A.992.992 0 0 0 14 20h6a.997.997 0 0 0 .929-1.371zM9.586 18H5.477l1.452-3.629A.999.999 0 0 0 7 14V6h1.5L11 9.333v7.253L9.586 18zm4.828 0L13 16.586V9.333L15.5 6H17v8c0 .127.024.254.071.371L18.523 18h-4.109z" />
      <circle cx={15} cy={11} r={0.75} />
      <circle cx={9} cy={11} r={0.75} />
      <circle cx={15} cy={14} r={0.75} />
      <circle cx={9} cy={14} r={0.75} />
    </g>
  </svg>
);

export default SvgComponent;
