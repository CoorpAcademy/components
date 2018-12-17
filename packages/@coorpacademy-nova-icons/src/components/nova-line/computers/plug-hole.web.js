import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 22H4c-1.103 0-2-.897-2-2V4c0-1.104.897-2 2-2h16c1.103 0 2 .896 2 2v16c0 1.103-.897 2-2 2zM4 4v16h16.001L20 4H4z"
      fill="currentColor"
    />
    <path
      d="M12 19c-3.86 0-7-3.14-7-7 0-3.859 3.14-7 7-7s7 3.141 7 7c0 3.86-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M9 10h2v4H9zM13 10h2v4h-2z" />
  </svg>
);

export default SvgComponent;
