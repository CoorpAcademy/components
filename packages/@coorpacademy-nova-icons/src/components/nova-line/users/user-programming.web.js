import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M15.001 22h-10a1 1 0 0 1-1-1V10c0-4.411 3.589-8 8-8 6.498 0 7.546 4.586 8.56 9.02.131.571.264 1.153.41 1.738a.998.998 0 0 1-.97 1.242h-1v3c0 1.103-.897 2-2 2h-1v2a1 1 0 0 1-1 1zm-9-2h8v-2a1 1 0 0 1 1-1h2v-4a1 1 0 0 1 1-1h.733l-.123-.535C17.49 6.561 16.686 4 12.001 4c-3.309 0-6 2.691-6 6v10z"
      fill="currentColor"
    />
    <path
      d="M10.471 13.53l-3-3a.75.75 0 0 1 0-1.061l3-3 1.061 1.061L9.062 10l2.47 2.47-1.061 1.06zM13.531 13.53l-1.061-1.061L14.94 10l-2.47-2.47 1.061-1.061 3 3a.75.75 0 0 1 0 1.061l-3 3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
