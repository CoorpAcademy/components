import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 .001c-1.594 0-3.07.837-4 2.08C8.07.838 6.594.001 5 .001c-2.757 0-5 2.243-5 5 0 5.491 8.124 10.632 8.471 10.848a.998.998 0 0 0 1.058 0C9.876 15.633 18 10.492 18 5.001c0-2.757-2.243-5-5-5zM17.707 12.294a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.415v4.586a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.293 1.414-1.414-6-6zM18 22.001h-2v-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
