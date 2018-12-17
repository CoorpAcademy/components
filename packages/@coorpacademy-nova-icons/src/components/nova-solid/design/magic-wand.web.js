import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M4.415 21.8L3 20.385l8.485-8.484 1.414 1.414z" />
      <path d="M19.088 8.19l2.296-4.776-4.775 2.296L12.899 2l.822 5.064L8.72 9.586l5.605.888.887 5.604 2.522-5.001 5.064.822z" />
    </g>
  </svg>
);

export default SvgComponent;
