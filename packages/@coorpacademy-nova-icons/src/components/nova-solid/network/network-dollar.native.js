import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 1.35v3.648h3.647A10.037 10.037 0 0 0 15 1.35zM7 6.998h6v6H7zM7 .458v4.54h6V.458c-.947-.298-1.955-.46-3-.46S7.948.16 7 .458zM20 9.998a9.95 9.95 0 0 0-.461-3H15v3.279a1.975 1.975 0 0 1 1-.279h4zM5 18.645v-3.647H1.354A10.055 10.055 0 0 0 5 18.645zM7 19.536a9.986 9.986 0 0 0 6 0v-4.539H7v4.539zM0 9.998a9.99 9.99 0 0 0 .461 3H5v-6H.461a9.97 9.97 0 0 0-.461 3zM1.354 4.998H5V1.35a10.042 10.042 0 0 0-3.646 3.648zM21 16.998h-2a1.001 1.001 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.345-3 3 0 1.654 1.346 3 3 3h2a1 1 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3 0-1.655-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
