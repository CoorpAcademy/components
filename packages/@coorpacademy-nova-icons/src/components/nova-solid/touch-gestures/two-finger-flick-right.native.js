import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 11.001a3 3 0 0 0-3 3 3 3 0 0 0-6 0v8h12v-8a3 3 0 0 0-3-3zm-5 4H7v-1a1 1 0 1 1 2 0v1zm6 0h-2v-1a1 1 0 1 1 2 0v1zM20.465 7.005v-4l-1.907 1.907.042-.106a15.483 15.483 0 0 0-8.011-.871A15.38 15.38 0 0 0 2 8.299l1.417 1.412a13.403 13.403 0 0 1 7.48-3.8 13.52 13.52 0 0 1 6.184.478l-1.615 1.615h4l-2 2h5v-5l-2.001 2.001z" />
    </G>
  </Svg>
);

export default SvgComponent;
