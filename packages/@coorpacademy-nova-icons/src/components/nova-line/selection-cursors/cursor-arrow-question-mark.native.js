import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M17 18.002h-2V16a1 1 0 0 1 1-1 1.001 1.001 0 0 0 0-2c-.551 0-1 .448-1 1h-2c0-1.654 1.346-3 3-3s3 1.346 3 3a3.006 3.006 0 0 1-2 2.829v1.173zM5 13h-.016a1.002 1.002 0 0 1-.924-.658l-4-11A1 1 0 0 1 1.341.061l11 4a1.001 1.001 0 0 1 .03 1.868L7.77 7.77l-1.841 4.602c-.153.38-.521.628-.929.628zM2.672 2.673l2.373 6.524L6.071 6.63c.103-.254.304-.456.558-.558l2.567-1.027-6.524-2.372z"
      fill="currentColor"
    />
    <Path
      d="M16 24c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6c0-3.308-2.691-6-6-6z"
      fill="currentColor"
    />
    <Circle cx={16} cy={20} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
