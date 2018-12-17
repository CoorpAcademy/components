import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24H-.001z" />
    <path
      fill="currentColor"
      d="M22.998 4.998h-5.465L15.83 2.443a1 1 0 0 0-.832-.446h-6a1 1 0 0 0-.832.446L6.463 4.998H.998a1 1 0 0 0-1 1v13a1 1 0 0 0 .629.929c.211.085 5.249 2.071 11.371 2.071 6.122 0 11.16-1.986 11.371-2.071a1 1 0 0 0 .629-.929v-13a1 1 0 0 0-1-1zm-15 8h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2zm10 4h-8v-8h8v8zm3 0A1 1 0 1 1 20.996 15a1 1 0 0 1 .002 1.998zm0-3A1 1 0 1 1 20.996 12a1 1 0 0 1 .002 1.998zm0-3A1 1 0 1 1 20.996 9a1 1 0 0 1 .002 1.998z"
    />
  </svg>
);

export default SvgComponent;
