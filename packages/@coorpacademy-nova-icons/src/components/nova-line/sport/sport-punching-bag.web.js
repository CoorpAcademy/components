import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <path
      d="M14.639 7.116l-2.896-4.342V1h-1.5v1.774L7.348 7.116A1.992 1.992 0 0 0 6 9v11c0 1.103.89 2 1.993 2h6c1.103 0 2-.897 2-2V9c0-.876-.569-1.613-1.354-1.884zM7.993 13H14v3H7.993v-3zm0-2V9H14v2H7.993zm1.235-4l1.765-2.648L12.759 7H9.228zM7.993 20v-2H14v2H7.993z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
