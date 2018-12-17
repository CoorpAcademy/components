import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 11.001a3 3 0 0 0-3 3 3 3 0 0 0-6 0v8h12v-8a3 3 0 0 0-3-3zm-5 4H8v-1a1 1 0 1 1 2 0v1zm6 0h-2v-1a1 1 0 1 1 2 0v1zM13.877 3.935a15.493 15.493 0 0 0-8.011.871l.042.106L4 3.005v4l-2-2v5h5l-2-2h4L7.385 6.39a13.483 13.483 0 0 1 6.184-.478 13.403 13.403 0 0 1 7.48 3.8L22.466 8.3a15.378 15.378 0 0 0-8.589-4.365z" />
    </G>
  </Svg>
);

export default SvgComponent;
