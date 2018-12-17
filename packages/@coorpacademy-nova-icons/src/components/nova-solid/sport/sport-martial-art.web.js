import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M14.894 18.553l-1.788.894L12 17.236l-1.106 2.211-1.788-.894L10.382 16H6v6h12v-6h-4.382zM18 2l-6 9-6-9-4 4v5l4-3v6h12V8l4 3V6z" />
    </g>
    <path fill="currentColor" d="M12 8L8 2h8z" />
  </svg>
);

export default SvgComponent;
