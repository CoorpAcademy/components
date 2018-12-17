import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M22.707 5.292l-2-2a1 1 0 0 0-1.414 0l-2 2a.997.997 0 0 0-.293.707v1h-2v-1a1 1 0 0 0-.293-.707l-2-2a1 1 0 0 0-1.414 0l-2 2A.997.997 0 0 0 9 5.999v1H7v-1a1 1 0 0 0-.293-.707l-2-2a1 1 0 0 0-1.414 0l-2 2A.997.997 0 0 0 1 5.999v13a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h2v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h2v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-13c0-.265-.106-.52-.293-.707zM5 17.999H3V6.414l1-1 1 1v11.585zm4-9v2H7v-2h2zm-2 6v-2h2v2H7zm6 3h-2V6.414l1-1 1 1v11.585zm4-9v2h-2v-2h2zm-2 6v-2h2v2h-2zm6 3h-2V6.414l1-1 1 1v11.585z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
