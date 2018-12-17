import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M21.743 20.331l-9-10c-.379-.422-1.108-.422-1.486 0l-9 10A1 1 0 0 0 3 22h18a1 1 0 0 0 .743-1.669zM5.245 20l6.593-7.325L15.5 20H5.245zM9 3h3v2H9zM10.365 8.951L8.95 10.365 6.828 8.243 8.243 6.83zM3 9h2v3H3zM7 1H1v6a6 6 0 0 0 6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
