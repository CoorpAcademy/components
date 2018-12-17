import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 2H6a2 2 0 0 0-2 2v1h2v1H2v2h2v3h2v1H2v2h2v3h2v1H2v2h2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6.393 12.949a.527.527 0 0 1 .747 0l1.492 1.492a.528.528 0 0 1 0 .746l-1.492 1.492a.529.529 0 0 1-.747 0l-1.864-1.864.01-.01a6.591 6.591 0 0 1 0-8.934l-.01-.01 1.864-1.866a.529.529 0 0 1 .747 0l1.492 1.492a.528.528 0 0 1 0 .746l-1.492 1.493a.529.529 0 0 1-.747 0l-.727-.725a4.994 4.994 0 0 0 0 6.676l.727-.728z"
    />
  </svg>
);

export default SvgComponent;
