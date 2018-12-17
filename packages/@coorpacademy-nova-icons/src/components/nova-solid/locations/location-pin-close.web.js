import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <path
      fill="currentColor"
      d="M12 2c-4.418 0-8 3.582-8 8s8 12 8 12 8-7.582 8-12-3.582-8-8-8zm4.242 10.828l-1.415 1.415L12 11.415l-2.828 2.828-1.415-1.415L10.585 10 7.757 7.172l1.415-1.414L12 8.586l2.828-2.828 1.415 1.414L13.414 10l2.828 2.828z"
    />
  </svg>
);

export default SvgComponent;
