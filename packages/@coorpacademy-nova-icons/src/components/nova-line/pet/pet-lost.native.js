import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 2H5C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3zm1 17c0 .551-.449 1-1 1H5c-.551 0-1-.449-1-1V5c0-.551.449-1 1-1h14c.551 0 1 .449 1 1v14z" />
      <Circle cx={12} cy={11} r={2} />
      <Path d="M9 9a1 1 0 0 0 1-1V7a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1zM12 8a1 1 0 0 0 1-1V6a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1zM15 9a1 1 0 0 0 1-1V7a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1zM13.667 14c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h.666a.5.5 0 0 1 0 1H12v1h2.333c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-.666a.5.5 0 0 1 0-1H17v4h1v-4h1v-1h-5.333zM6 14H5v5h3v-1H6zM12 16c0-1.104-.897-2-2-2s-2 .896-2 2v1c0 1.104.897 2 2 2s2-.896 2-2v-1zm-1 1c0 .551-.449 1-1 1s-1-.449-1-1v-1c0-.551.449-1 1-1s1 .449 1 1v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
