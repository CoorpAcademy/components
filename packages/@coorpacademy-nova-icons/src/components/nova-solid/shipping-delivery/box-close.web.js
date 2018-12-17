import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M15.832.446A1.001 1.001 0 0 0 15 .001h-4v6h8.535L15.832.446zM9 .001H5a1 1 0 0 0-.832.445L.465 6.001H9v-6zM20 8.001H0v11a1 1 0 0 0 1 1h13v-.003c0-3.312 2.687-6 6-6V8.001z" />
      <path d="M23.707 17.705l-1.414-1.414L20 18.584l-2.293-2.293-1.414 1.414 2.293 2.293-2.293 2.293 1.414 1.414L20 21.412l2.293 2.293 1.414-1.414-2.293-2.293z" />
    </g>
  </svg>
);

export default SvgComponent;
