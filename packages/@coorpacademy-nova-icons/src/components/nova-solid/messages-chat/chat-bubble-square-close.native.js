import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.088 7h-9.09c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-6a5.997 5.997 0 0 1-5.91-5zM20.705 3.707l-1.414-1.414-2.293 2.293-2.293-2.293-1.414 1.414L15.584 6l-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414L18.412 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
