import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M19.316 12.053L14 10.281v-6.28a1 1 0 0 0-.758-.97l-4-1A1.003 1.003 0 0 0 8 3.001v7.382l-3.447 1.724a1 1 0 0 0-.553.894v4c0 .155.036.309.105.447l2 4c.17.339.516.553.895.553h10c.459 0 .859-.313.971-.757l2-8a1 1 0 0 0-.655-1.191zm-3.097 7.948H7.618L6 16.765V13.62l2-1v2.381h2V4.282l2 .5v6.219a1 1 0 0 0 .684.949l5.121 1.708-1.586 6.343z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
