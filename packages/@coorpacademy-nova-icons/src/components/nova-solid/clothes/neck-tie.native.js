import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <G fill="currentColor">
      <Path d="M9.612 4.998h4.775l.561-1.682a.994.994 0 0 0-.139-.9A.991.991 0 0 0 14 2h-4a1 1 0 0 0-.95 1.316l.562 1.682zM15.984 17.821L14.016 7H9.984L8.016 17.821a.997.997 0 0 0 .277.885l3 3a.994.994 0 0 0 1.414 0l3-3a.996.996 0 0 0 .277-.885z" />
    </G>
  </Svg>
);

export default SvgComponent;
