import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <path
      fill="currentColor"
      d="M20 11.412V4h-2v7c-.841 0-2.867 1.264-6 3.727C8.867 12.264 6.841 11 6 11V4H4v7.412c-1.282.594-2 1.822-2 3.588 0 3.687 2.583 5 5 5 1.758 0 3.896-1.659 5-2.633 1.104.974 3.242 2.633 5 2.633 2.417 0 5-1.313 5-5 0-1.766-.718-2.994-2-3.588z"
    />
  </svg>
);

export default SvgComponent;
