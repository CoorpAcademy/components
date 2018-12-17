import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM9 20.007H7.312l-.562-1.2-.562 1.2H4.5l1.406-3-1.406-3h1.688l.562 1.2.562-1.2H9l-1.406 3 1.406 3zm5.25 0h-1.5v-2.772l-.126.188c-.278.418-.97.418-1.248 0l-.126-.188v2.772h-1.5v-5.25a.75.75 0 0 1 1.374-.416L12 15.655l.876-1.314a.752.752 0 0 1 1.374.416v5.25zm5.25 0h-3.75v-6h1.5v4.5h2.25v1.5zm-4.5-13v-5l5 5h-5z"
    />
  </svg>
);

export default SvgComponent;
