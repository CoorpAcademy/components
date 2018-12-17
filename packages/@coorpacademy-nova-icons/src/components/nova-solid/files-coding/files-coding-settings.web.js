import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12.718 12.011H12v-4h2v3.077a7.945 7.945 0 0 1 4-1.079V4.594L13.414.009H2c-1.103 0-2 .896-2 2v18c0 1.102.897 2 2 2h9.078a7.973 7.973 0 0 1 1.64-9.998zM12 1.008l5 5h-5v-5zM3 8.011h2v4H3v-4zm3 9.997H3v-4h3v4zm1-9.997h3v4H7v-4zm1 5.997h2v4H8v-4z" />
      <path d="M24.002 19.009v-2H22.9a4.966 4.966 0 0 0-.733-1.753l.784-.786-1.414-1.414-.785.784a4.948 4.948 0 0 0-1.751-.73v-1.102h-2v1.102a4.96 4.96 0 0 0-1.753.731l-.783-.783-1.414 1.414.783.783a4.97 4.97 0 0 0-.732 1.753H12v2h1.102c.131.639.385 1.229.732 1.754l-.783.786 1.415 1.412.782-.783a4.99 4.99 0 0 0 1.754.731v1.102h2v-1.103a4.97 4.97 0 0 0 1.753-.732l.784.784 1.413-1.416-.784-.782a4.957 4.957 0 0 0 .732-1.752h1.102zm-6.002 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </g>
  </svg>
);

export default SvgComponent;
