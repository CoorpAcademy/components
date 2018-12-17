import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      fill="currentColor"
      d="M22 7.002h-3v-4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18c.266 0 .52-.105.707-.293l2-2a1 1 0 0 0 .293-.708v-11a1 1 0 0 0-1-.999zM9 19.001H3v-2h6v2zm0-3H3v-2h6v2zm0-2.999H3v-2h6v2zm7 5.999h-6v-2h6v2zm0-3h-6v-2h6v2zm0-2.999h-6v-2h6v2zm0-5H3v-3h13v3zm5 10.585l-.414.414H19v-10h2v9.586z"
    />
  </svg>
);

export default SvgComponent;
