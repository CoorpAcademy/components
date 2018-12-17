import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M23 7h-3.185A2.993 2.993 0 0 0 17 5a1 1 0 0 0-1-1H5C2.794 4 1 5.795 1 8c0 1.762 1.153 3.244 2.738 3.776L2.246 17H1a1.001 1.001 0 0 0-.97 1.243l1 4A1 1 0 0 0 2 23h7a1 1 0 0 0 .97-.757l1-4A1 1 0 0 0 10 17H9v-2h1c1.858 0 3.411-1.279 3.858-3H16a1 1 0 0 0 1-1 2.993 2.993 0 0 0 2.815-2H23V7zM8.219 21H2.781l-.5-2h6.438l-.5 2zm-3.893-4l1.429-5H7v5H4.326zM10 13H9v-1h2.722c-.347.595-.985 1-1.722 1zm-5-3c-1.103 0-2-.896-2-2s.897-2 2-2h10v4H5zm12-1V7c.551 0 1 .449 1 1s-.449 1-1 1z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
