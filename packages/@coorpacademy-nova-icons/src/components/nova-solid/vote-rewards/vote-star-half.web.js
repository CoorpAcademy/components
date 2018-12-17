import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M13.231 2.028a.997.997 0 0 0-1.125.525L9.382 8.001H4a1 1 0 0 0-.707 1.707l4.584 4.584-1.838 6.435a1 1 0 0 0 1.516 1.106l6-4c.278-.186.445-.498.445-.832v-14a.998.998 0 0 0-.769-.973z"
    />
  </svg>
);

export default SvgComponent;
