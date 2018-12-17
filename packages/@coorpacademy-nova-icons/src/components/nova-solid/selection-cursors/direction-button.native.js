import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 7.002h-5v-5a1 1 0 0 0-1-1H8.018a1 1 0 0 0-1 1v5H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.018v5a1 1 0 0 0 1 1H16a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-14 7l-3-2 3-2v4zm4 5.999l-2-3h4l-2 3zM10 7.002l2-3 2 3h-4zm6 7v-4l3 2-3 2z"
    />
  </Svg>
);

export default SvgComponent;
