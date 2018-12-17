import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M17 13.999v-6a1 1 0 0 0 .64-1.767l-6-5a.997.997 0 0 0-1.28 0l-6 5A.998.998 0 0 0 5 7.999v6H3v2h3.802l-1.455 8h3.698L11 21.486l1.955 2.513h3.698l-1.455-8H19v-2h-2zM11 3.301l3.238 2.698H7.762L11 3.301zm-3.355 19.24l.791-4.351 1.296 1.667-2.087 2.684zm1.622-6.542h3.466L11 18.227l-1.733-2.228zm3 3.857l1.296-1.667.791 4.351-2.087-2.684zM15 13.999H7v-6h8v6z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
