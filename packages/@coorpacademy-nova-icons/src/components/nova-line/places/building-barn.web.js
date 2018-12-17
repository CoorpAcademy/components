import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M22 19.999v-7c0-.379-.214-.725-.553-.895l-4-2a1.006 1.006 0 0 0-.895 0l-4 2a1 1 0 0 0-.552.895v7h-2v-12.5c0-1.929-1.57-3.5-3.5-3.5S3 5.569 3 7.499v12.5H0v2h24v-2h-2zm-14-6H5v-3h3v3zm-1.5-8c.827 0 1.5.673 1.5 1.5v1.5H5v-1.5c0-.827.672-1.5 1.5-1.5zm-1.5 14v-4h3v4H5zm14 0v-3h-4v3h-1v-6.382l3-1.5 3 1.5v6.382h-1z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
