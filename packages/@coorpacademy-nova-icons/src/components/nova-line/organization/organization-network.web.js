import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 14c-.295 0-.572.067-.824.182l-1.615-1.153A4.972 4.972 0 0 0 18 11a4.964 4.964 0 0 0-.833-2.753l2.321-2.321c.164.043.334.074.512.074a2 2 0 1 0-2-2c0 .178.031.348.074.512l-2.321 2.321A4.964 4.964 0 0 0 13 6c-1.515 0-2.857.691-3.775 1.759L5.996 5.965A1.998 1.998 0 0 0 2 6a2 2 0 0 0 2 2c.375 0 .721-.109 1.021-.289l3.231 1.796C8.104 9.981 8 10.477 8 11c0 1.018.309 1.963.833 2.753l-4.321 4.321A2.01 2.01 0 0 0 4 18a2 2 0 1 0 2 2 2.01 2.01 0 0 0-.074-.512l4.321-4.321a4.923 4.923 0 0 0 1.753.731v2.379A1.99 1.99 0 0 0 11 20a2 2 0 1 0 4 0c0-.737-.404-1.375-1-1.723v-2.379a4.97 4.97 0 0 0 2.391-1.247l1.628 1.163c-.006.062-.019.122-.019.186a2 2 0 1 0 2-2zm-7 0c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
