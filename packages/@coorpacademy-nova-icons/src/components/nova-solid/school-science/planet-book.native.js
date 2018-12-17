import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 1.354V5h3.647A10.047 10.047 0 0 0 15 1.354zM20 10a9.98 9.98 0 0 0-.461-3H15v3h5zM7 19.54a9.98 9.98 0 0 0 3 .46v-5H7v4.54zM13 7H7v6h3v-2a1 1 0 0 1 1-1h2V7zM0 10a9.98 9.98 0 0 0 .461 3H5V7H.461A9.98 9.98 0 0 0 0 10zM5 18.646V15H1.353A10.047 10.047 0 0 0 5 18.646zM1.353 5H5V1.354A10.047 10.047 0 0 0 1.353 5zM13 .461C12.053.162 11.045 0 10 0S7.947.162 7 .461V5h6V.461zM23.493 12.13a.995.995 0 0 0-1.007.013L18 14.834l-4.485-2.691A.999.999 0 1 0 12 13v7a1 1 0 0 0 .485.858l5 3a1.002 1.002 0 0 0 1.03 0l5-3A1 1 0 0 0 24 20v-7a1 1 0 0 0-.507-.87zM14 14.766l3 1.801v4.668l-3-1.801v-4.668zm8 4.668l-3 1.801v-4.668l3-1.801v4.668z" />
    </G>
  </Svg>
);

export default SvgComponent;
