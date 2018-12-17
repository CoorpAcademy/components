import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M11 2c-.529 0-1.076.049-1.672.15a1.002 1.002 0 0 0-.426 1.792C11.506 5.853 13 8.791 13 12c0 3.21-1.494 6.148-4.098 8.059a.999.999 0 0 0 .426 1.792c.596.1 1.143.149 1.672.149 5.514 0 10-4.485 10-10 0-5.514-4.486-10-10-10zm.979 17.94C13.901 17.765 15 14.937 15 12s-1.099-5.765-3.021-7.94C15.93 4.544 19 7.921 19 12c0 4.08-3.07 7.456-7.021 7.94z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
