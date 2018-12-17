import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M19 4h-3.646a2 2 0 0 0-1.857 1.257L12 9H9V6a1 1 0 0 0-1-1H5v2h2v2a2 2 0 0 0-2 2v3h15V5a1 1 0 0 0-1-1zm-1 5h-4l1-3h3v3zM17 15H7a3 3 0 1 0 0 6h10a3 3 0 0 0 0-6zM7 19.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
