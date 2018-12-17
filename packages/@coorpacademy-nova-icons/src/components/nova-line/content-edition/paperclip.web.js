import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M11 23c-2.897 0-5-2.313-5-5.5V9c0-3.991 2.794-7 6.5-7S19 5.009 19 9v7h-2V9c0-2.897-1.893-5-4.5-5S8 6.103 8 9v8.5c0 1.743.928 3.5 3 3.5s3-1.757 3-3.5V10c0-.602-.146-2-1.5-2S11 9.398 11 10v7H9v-7c0-2.393 1.407-4 3.5-4S16 7.607 16 10v7.5c0 3.187-2.103 5.5-5 5.5z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
