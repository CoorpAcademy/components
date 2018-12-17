import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 11.001v-3h-2v4H8l2 4h6v-4zM15 6.001l-3-3-3 3zM12 .001l-3 3h6zM9 18.001l3 3 3-3zM12 24.001l3-3H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
