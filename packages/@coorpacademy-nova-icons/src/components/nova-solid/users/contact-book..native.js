import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.001 4h3v5h-3zM19.001 10h3v5h-3zM16.001 2h-12a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 5A2 2 0 1 1 10 11.001 2 2 0 0 1 10 7zm-3 8c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
