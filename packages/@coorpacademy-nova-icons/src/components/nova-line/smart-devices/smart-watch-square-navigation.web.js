import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.004h24v24H0z" />
    <path
      d="M17.989 3.72c-.648-.531-.974-.799-.974-1.719 0-1.104-.897-2-2-2H9a1.99 1.99 0 0 0-1.984 2c0 .92-.325 1.188-.974 1.719-.855.703-2.026 1.665-2.026 4.281v8c0 2.616 1.171 3.578 2.026 4.281.648.531.974.799.974 1.719 0 1.104.897 2 2 2h6.016a1.99 1.99 0 0 0 1.984-2c0-.92.325-1.188.974-1.719.855-.703 2.026-1.665 2.026-4.281v-8c0-2.616-1.172-3.578-2.027-4.281zm.027 4.281v8c0 .396-.034.721-.093 1H6.108a4.812 4.812 0 0 1-.093-1v-8c0-.396.034-.721.093-1h11.814c.059.279.094.603.094 1zM9 2.001h6.016c0 1.613.707 2.41 1.389 3H7.627c.682-.59 1.387-1.387 1.373-3zm6.016 20h-6c0-1.613-.707-2.41-1.389-3h8.777c-.679.588-1.383 1.384-1.388 3z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M8.016 15.001l4-7 4 7-4-2z" />
  </svg>
);

export default SvgComponent;
