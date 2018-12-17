import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.472 9.201l-5.836 8.024L5.6 11.199l3.601-4.8 3.164 2.375L15.3 4.738a8.011 8.011 0 0 0-1.3-.476V1.999h-4v2.263a7.993 7.993 0 0 0-2.493 1.123L5.989 3.867 3.868 5.988l1.518 1.517a7.98 7.98 0 0 0-1.123 2.493H2v4h2.263a7.927 7.927 0 0 0 1.123 2.493L3.868 18.01l2.121 2.122 1.518-1.518A7.99 7.99 0 0 0 10 19.736v2.263h4v-2.263a7.968 7.968 0 0 0 2.493-1.122l1.517 1.518 2.121-2.122-1.517-1.518a7.925 7.925 0 0 0 1.122-2.493H22v-4h-2.263c-.071-.273-.168-.535-.265-.798z"
    />
    <path
      fill="currentColor"
      d="M13.212 14.408L8.4 10.8l1.2-1.601 3.188 2.391 7.403-10.179 1.618 1.176z"
    />
  </svg>
);

export default SvgComponent;
