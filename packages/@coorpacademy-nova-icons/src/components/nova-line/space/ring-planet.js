import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20.308 3.694c-1.289-1.292-3.995.087-6.21 1.629A6.938 6.938 0 0 0 12 5c-3.86 0-7 3.141-7 7 0 .73.113 1.436.322 2.098-1.542 2.217-2.919 4.922-1.63 6.211.338.339.791.507 1.354.507 1.537 0 3.605-1.27 4.868-2.146.66.209 1.357.33 2.086.33 3.86 0 7-3.14 7-7a6.89 6.89 0 0 0-.33-2.086c1.147-1.652 3.061-4.799 1.638-6.22zm-8.207 13.297a39.743 39.743 0 0 0 4.889-4.889 4.995 4.995 0 0 1-4.889 4.889zm5.836-8.68l-.006-.012c-1.194 1.825-2.545 3.498-4.34 5.293-1.562 1.56-3.2 2.97-5.292 4.339.004.002.008.003.011.006-.595.376-3.072 1.795-3.558 1.31-.176-.175-.101-1.318 1.313-3.552.284.455.612.877.989 1.255a24.094 24.094 0 0 0 1.701-1.177C7.69 14.856 7 13.514 7 12c0-2.756 2.243-5 5-5 1.513 0 2.855.69 3.773 1.756.44-.585.839-1.158 1.176-1.702a7.016 7.016 0 0 0-1.254-.988c2.233-1.414 3.377-1.49 3.552-1.313.484.483-.934 2.963-1.31 3.558z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
