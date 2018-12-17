import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle cx={15} cy={5} r={2} fill="currentColor" />
    <Path
      d="M8 17.586L2.414 12l10-10H18v5.586l-1.709 1.709 1.415 1.413 2.001-2.001A.996.996 0 0 0 20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7A.997.997 0 0 0 8 20v-2.414zM19 22h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z"
      fill="currentColor"
    />
    <Path
      d="M22.293 19.707L17 14.414l-5.293 5.293-1.414-1.414 6-6a.999.999 0 0 1 1.414 0l6 6-1.414 1.414z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
