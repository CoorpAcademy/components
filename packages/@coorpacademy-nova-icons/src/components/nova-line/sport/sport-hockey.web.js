import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M21.299 3.759A1.987 1.987 0 0 0 19.731 3h-.983c-.888 0-1.679.596-1.923 1.451L13.239 17h-2.746c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5h6.5c.464 0 .867-.319.974-.771l3.71-15.77a1.983 1.983 0 0 0-.378-1.7zM19.73 5l-.803 3.415-1.347.674L18.748 5h.982zm-3.529 15h-5.708a.5.5 0 0 1 0-1h3.5c.446 0 .839-.296.962-.725l1.879-6.578 1.497-.748L16.201 20zM0 19h6v3H0z" />
    </g>
  </svg>
);

export default SvgComponent;
