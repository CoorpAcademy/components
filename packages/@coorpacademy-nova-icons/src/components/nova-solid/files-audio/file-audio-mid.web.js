import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15.75 15.507v3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5z" />
      <path d="M16.414 1.007H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zm-6.664 19h-1.5v-2.772l-.126.188c-.278.418-.97.418-1.248 0l-.126-.189v2.772h-1.5v-5.25a.749.749 0 0 1 1.374-.416l.876 1.315.876-1.314a.752.752 0 0 1 1.374.416v5.25zm3.75-4.5h-.75v3h.75v1.5h-3v-1.5h.75v-3h-.75v-1.5h3v1.5zm2.25 4.5h-1.5v-6h1.5c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-.75-13v-5l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
