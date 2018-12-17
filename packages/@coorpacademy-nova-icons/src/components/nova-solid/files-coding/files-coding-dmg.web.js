import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 15.507v3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5z" />
      <path d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM6 20.007H4.5v-6H6c1.654 0 3 1.346 3 3s-1.346 3-3 3zm8.25 0h-1.5v-2.772l-.126.188c-.278.418-.97.418-1.248 0l-.126-.188v2.772h-1.5v-5.25a.75.75 0 0 1 1.374-.416L12 15.655l.876-1.314a.75.75 0 0 1 1.374.416v5.25zm5.25-4.5h-3v3H18v-.75h-.75v-1.5h2.25v2.25c0 .827-.673 1.5-1.5 1.5h-1.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3v1.5zm-4.5-8.5v-5l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
