import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M21.974 13.999c0-.081.016-.162-.004-.242l-2-8a1.002 1.002 0 0 0-.97-.758H5a1 1 0 0 0-.97.758l-2 8c-.02.08-.004.161-.004.242H2v6a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-5h10v5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-6h-.026zM12 7.677l2.662 5.322H9.338L12 7.677zm-3.902 4.448L6.175 6.999h4.486l-2.563 5.126zm5.24-5.126h4.485l-1.922 5.127-2.563-5.127zm5.364 1.931l1.017 4.069h-2.543l1.526-4.069zm-13.405 0l1.526 4.069H4.28L5.297 8.93zM5 18.999H4v-4h1v4zm14 0v-4h1v4h-1z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
