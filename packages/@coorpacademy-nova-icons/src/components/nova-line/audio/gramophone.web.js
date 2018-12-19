import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20.399 11.644l-5.042-9.245c-.297-.545-.784-.87-1.335-.895-.56-.032-1.064.258-1.408.773L7.723 9.613c-.337.506-.406 1.085-.188 1.588.218.503.686.85 1.287.95l10.17 1.694c.006.057.008.108.008.155v4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2h2c1.103 0 2-.897 2-2v-4c0-.717-.259-1.729-.601-2.356zm-10.71-1.375l4.225-6.337 4.224 7.745-8.449-1.408zM15 21H5v-1h10v1z" />
      <path d="M5 15h10v2H5z" />
    </g>
  </svg>
);

export default SvgComponent;
