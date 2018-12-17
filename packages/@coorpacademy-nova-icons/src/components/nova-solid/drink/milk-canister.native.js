import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.2 4.4l-1.629 2.173L20 8l1.8-2.4zM3.8 4.4L2.2 5.6 4 8l1.429-1.427zM5 10v10c0 1.103.897 2 2 2h10c1.104 0 2-.897 2-2V10H5z" />
      <G>
        <Path d="M7 2h10v2H7zM18.707 8.293L16 5.586V5H8v.586L5.293 8.293A.997.997 0 0 0 5 9h14a.997.997 0 0 0-.293-.707z" />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
