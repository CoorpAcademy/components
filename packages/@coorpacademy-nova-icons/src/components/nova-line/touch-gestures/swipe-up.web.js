import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.365 5h1.642V3h-5v5h2V6.509a9.968 9.968 0 0 1 2 5.991 9.976 9.976 0 0 1-3.636 7.715l1.273 1.542a11.97 11.97 0 0 0 4.362-9.257A11.95 11.95 0 0 0 18.365 5z" />
      <path d="M16 13.992v-3a1 1 0 0 0-1-1H9v-1c0-.347-.18-.668-.474-.851a1.003 1.003 0 0 0-.973-.043l-4 2a1 1 0 0 0-.553.894v6a1 1 0 0 0 1 1h5a1 1 0 0 0 .949-.683l.772-2.317H15a1 1 0 0 0 1-1zm-2-1h-4a.999.999 0 0 0-.949.685l-.772 2.315H5V11.61l2-1v.382a1 1 0 0 0 1 1h6v1z" />
    </g>
  </svg>
);

export default SvgComponent;
