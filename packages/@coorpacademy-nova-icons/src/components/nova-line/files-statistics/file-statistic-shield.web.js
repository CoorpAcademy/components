import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7.293 10.296L6 11.59V8.003H4v9h6v-2H6v-.586l2-2 1.293 1.293a.993.993 0 0 0 .707.293V11.59l-1.293-1.293a1 1 0 0 0-1.414-.001z" />
      <path d="M2 2h10v4h4v3.011h2V4.586L13.414 0H2C.897 0 0 .897 0 2v18.001c0 1.104.897 2 2 2h8v-2H2V2z" />
      <path d="M12 11.002v7c0 3.813 3.796 5.579 5.804 5.98l.196.04.196-.04c2.008-.4 5.804-2.167 5.804-5.98v-7H12zm10 7c0 2.763-3.153 3.756-3.998 3.974-.827-.217-4.002-1.225-4.002-3.974v-5h8v5z" />
      <path d="M17 20.002h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
