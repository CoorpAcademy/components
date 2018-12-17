import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 9c-4.176 0-7.191-.843-9-2.032V9c0 .769 2.216 3 9 3s9-2.231 9-3V6.968C19.191 8.157 16.176 9 12 9z" />
      <Path d="M12 17c6.784 0 9-2.231 9-3v-2.032C19.191 13.157 16.176 14 12 14s-7.191-.843-9-2.032V14c0 .769 2.216 3 9 3zM12 7c5.195 0 7.705-1.307 8.6-2.265C19.404 2.936 15.688 2 12 2s-7.404.936-8.6 2.735C4.295 5.693 6.805 7 12 7z" />
      <Path d="M12 19c-4.176 0-7.191-.843-9-2.032V18c0 2.626 4.527 4 9 4s9-1.374 9-4v-1.032C19.191 18.157 16.176 19 12 19z" />
    </G>
  </Svg>
);

export default SvgComponent;
