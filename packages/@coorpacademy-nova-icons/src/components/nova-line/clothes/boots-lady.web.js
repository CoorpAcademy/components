import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <path
      d="M21.707 3.293C21.491 3.077 20.201 2 16 2s-5.491 1.077-5.707 1.293c-.215.215-.32.516-.287.817l.927 8.339-8.419 4.677A1.001 1.001 0 0 0 2 18c0 1.383.627 4 3 4h7c.455 0 .854-.313.969-.752.031-.118.697-2.569 3.031-3.133V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a.996.996 0 0 0-.293-.707zM17 4.026V8.5a.5.5 0 0 1-1 0V4c.363 0 .69.012 1 .026zM5 20c-.475 0-.723-.5-.854-1h7.656a7.41 7.41 0 0 0-.521 1H5zm8.689-3h-6.83l5.627-3.126a.999.999 0 0 0 .508-.984l-.928-8.348c.35-.142.963-.323 1.934-.436V8.5c0 1.379 1.121 2.5 2.5 2.5S19 9.879 19 8.5V4.267c.469.101.797.211 1 .296V17h-2a1 1 0 0 0-1-1c-1.355 0-2.44.411-3.311 1zM18 20v-1h2v1h-2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
