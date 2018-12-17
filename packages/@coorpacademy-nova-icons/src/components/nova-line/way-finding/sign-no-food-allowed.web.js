import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M17 5.171v-.837c.161.1.322.22.479.358l1.4-1.4C17.996 2.486 16.958 2 16 2h-1v5.171l2-2zM22.707 5.121l-1.414-1.415L3.322 21.678l1.414 1.415L7 20.828V21h2v-2.172l6-6V21h2v-7h4V8c0-.366-.039-.723-.101-1.071l1.808-1.808zM19 12h-2v-1.172l2-2V12zM7 11.899v3.272l2-2v-1.272A5.008 5.008 0 0 0 13 7V2h-2v5a2.995 2.995 0 0 1-2 2.816V2H7v7.816A2.995 2.995 0 0 1 5 7V2H3v5a5.008 5.008 0 0 0 4 4.899z" />
    </g>
  </svg>
);

export default SvgComponent;
