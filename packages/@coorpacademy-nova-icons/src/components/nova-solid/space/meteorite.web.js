import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21.515 15.709l-4-2.4a1 1 0 0 0-1.029 0l-2.953 1.771A1.996 1.996 0 0 1 13 19c-.366 0-.705-.105-1-.277v1.71a1 1 0 0 0 .485.857l4 2.401c.317.189.712.189 1.029 0l4-2.401a.998.998 0 0 0 .486-.856v-3.867c0-.352-.185-.677-.485-.858zM19 20a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM10.528 18.208l-9.9-5.658.745-1.302 9.899 5.658zM11.55 1.627l5.657 9.898-1.303.744-5.656-9.898zM3.508 7.72l3.535 2.122-.771 1.285-3.536-2.121zM8.007 3.735l2.121 3.536-1.286.771L6.72 4.507zM13.55 13.49l-1.06 1.06-2.12-2.122 1.06-1.06z" />
    </g>
  </svg>
);

export default SvgComponent;
