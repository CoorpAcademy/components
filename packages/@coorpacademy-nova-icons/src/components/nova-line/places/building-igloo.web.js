import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M12 4.999c-6.617 0-12 5.384-12 12v2a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-2c0-6.617-5.384-12-12-12zm9.159 8H19V9.87a10.05 10.05 0 0 1 2.159 3.129zm-4.159 5h-2v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3v2H7v-6h10v6zM13 7.05a9.92 9.92 0 0 1 4 1.302v1.647h-4V7.05zm-2 2.949H7V8.352a9.936 9.936 0 0 1 4-1.302v2.949zM5 9.87v3.129H2.84A10.035 10.035 0 0 1 5 9.87zm-3 7.129c0-.684.07-1.353.202-2H5v3H2v-1zm9 1v-2c0-.551.449-1 1-1s1 .449 1 1v2h-2zm11 0h-3v-3h2.798c.132.647.202 1.316.202 2v1z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
