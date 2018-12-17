import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M5.857 7.243L3.85 9.25c-2.713 2.712-.598 8.94-.348 9.642.1.283.322.505.605.606 2.845 1.016 7.496 1.799 9.642-.348l2.009-2.008-9.901-9.899zM20 4.414L18.586 3l-2.155 2.155c-1.594-1.331-3.402-2.057-5.178-2.057-1.743 0-3.364.7-4.688 2.024a.996.996 0 0 0-.001 1.413L7.979 7.95 10.1 5.828l1.414 1.415-2.121 2.121 1.414 1.413 3.536-3.535 1.414 1.414-3.536 3.536 1.415 1.414 2.122-2.121 1.414 1.414-2.122 2.122 1.415 1.414a.996.996 0 0 0 1.413-.001c2.749-2.748 2.696-6.617-.032-9.865L20 4.414z" />
    </g>
  </svg>
);

export default SvgComponent;
