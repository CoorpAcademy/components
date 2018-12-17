import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M22 13h-2.069A8.01 8.01 0 0 0 13 6.069V2h-2v4.069A8.01 8.01 0 0 0 4.069 13H2v2h2.069c.495 3.94 3.859 7 7.931 7s7.436-3.06 7.931-7H22v-2zM12 8c2.967 0 5.432 2.167 5.91 5H6.09c.478-2.833 2.943-5 5.91-5zm1 11.911V18h1v-2h-4v2h1v1.911A6.01 6.01 0 0 1 6.09 15h11.82A6.01 6.01 0 0 1 13 19.911z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
