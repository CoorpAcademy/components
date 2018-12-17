import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M20.379 6.515A2.001 2.001 0 0 0 18.438 5H16c0-2.205-1.794-4-4-4S8 2.795 8 5H5.562a2 2 0 0 0-1.94 1.515L2 13h20l-1.621-6.485zM8 11H6V7h2v4zm5 0h-2V7h2v4zm-3-6c0-1.103.897-2 2-2s2 .897 2 2h-4zm8 6h-2V7h2v4zM3.621 21.486A2.002 2.002 0 0 0 5.562 23h12.877a2 2 0 0 0 1.94-1.514L22 15H2l1.621 6.486zM16 17h2v4h-2v-4zm-5 0h2v4h-2v-4zm-5 0h2v4H6v-4z" />
    </g>
  </svg>
);

export default SvgComponent;
