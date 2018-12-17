import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h20c1.104 0 2-.897 2-2v-9c0-1.103-.896-2-2-2zm-20 11v-9h20l.002 9H2z" />
      <path d="M12.438 9.002a2.628 2.628 0 0 0-2.625 2.625v1.75c0 1.448 1.178 2.625 2.625 2.625s2.625-1.177 2.625-2.625v-1.75a2.628 2.628 0 0 0-2.625-2.625zm.875 4.375a.876.876 0 0 1-1.75 0v-1.75c0-.482.393-.875.875-.875s.875.393.875.875v1.75zM18.513 9.002l-.838 3.414-.862-3.414h-1.75l1.717 7h1.801l-.018-.071 1.75-6.929zM8.316 9.04a.873.873 0 0 0-.981.352l-1.022 1.533-1.022-1.533a.874.874 0 1 0-1.603.485v6.125h1.75v-3.235l.147.22c.324.487 1.131.487 1.456 0l.146-.22v3.235h1.75V9.877a.872.872 0 0 0-.621-.837z" />
    </g>
  </svg>
);

export default SvgComponent;
