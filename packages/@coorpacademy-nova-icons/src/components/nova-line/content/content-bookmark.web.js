import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M21 4.001h-1v13h-6a.996.996 0 0 0-.707.293l-.293.293V7.415l1-1V4.001a.996.996 0 0 0-.707.293L12 5.587l-1.293-1.293A.996.996 0 0 0 10 4.001H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6.586l1.707 1.707a.997.997 0 0 0 1.414 0l1.707-1.707H21a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1zM11 17.587l-.293-.293a.997.997 0 0 0-.707-.293H4v-11h5.586L11 7.415v10.172z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M19 12.001l-2-2-2 2v-10h4z" />
  </svg>
);

export default SvgComponent;
