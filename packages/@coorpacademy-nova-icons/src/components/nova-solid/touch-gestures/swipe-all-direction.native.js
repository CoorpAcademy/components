import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 8.001h-2v4H8l2 4h6v-4l-4-1zM18 15.001l3-3-3-3zM24 12.001l-3-3v6zM6 15.001v-6l-3 3zM0 12.001l3 3v-6zM15 6.001l-3-3-3 3zM12 .001l-3 3h6zM9 18.001l3 3 3-3zM12 24.001l3-3H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
