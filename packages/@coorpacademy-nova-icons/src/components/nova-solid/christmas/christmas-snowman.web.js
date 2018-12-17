import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24H0z" />
    <path
      fill="currentColor"
      d="M22 14v-2h-2v-2h-2v2.586l-1.772 1.773a5.016 5.016 0 0 0-1.435-1.502A3.989 3.989 0 0 0 16 10c0-.731-.212-1.409-.557-2H17V6h-2V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H7v2h1.557A3.953 3.953 0 0 0 8 10c0 1.119.464 2.129 1.207 2.856a5.024 5.024 0 0 0-1.434 1.502L6 12.586V10H4v2H2v2h2.586l2.468 2.468c-.019.177-.054.35-.054.532 0 2.757 2.243 5 5 5s5-2.243 5-5c0-.182-.035-.355-.054-.532L19.414 14H22zm-12-4a2 2 0 1 1 4.001.001A2 2 0 0 1 10 10zm2 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
    />
  </svg>
);

export default SvgComponent;
