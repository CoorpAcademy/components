import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 17v1H4V6h8v1h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3h-2zM19 16h-4l-1-5h6zM18 9V8h-2v1h-2v1h6V9z" />
    </G>
  </Svg>
);

export default SvgComponent;
