import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M22 13c0-4.364-2.199-6.613-2.293-6.707A.996.996 0 0 0 19 6h-2.586l2.293-2.293-1.414-1.414L13.586 6H4v2h14.534C19.01 8.636 20 10.29 20 13c0 1.036-.711 1.996-1.518 2.742.146-2.487-.443-5.117-1.775-6.449A.996.996 0 0 0 16 9H3a.999.999 0 0 0-.707 1.707l1.432 1.433c-1.047 1.882-1.897 5.296.475 8.46a1 1 0 0 0 .8.4h11a1 1 0 0 0 .707-.293c.521-.521.922-1.246 1.216-2.077C19.094 17.936 22 15.918 22 13zm-6.461-2c.5.697.802 1.804.91 3H5.074a6.38 6.38 0 0 1 .726-1.4 1 1 0 0 0-.093-1.307L5.414 11h10.125zm0 8H5.523a5.252 5.252 0 0 1-.852-3h11.777c-.107 1.196-.409 2.303-.909 3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
