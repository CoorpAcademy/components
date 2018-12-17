import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 10c2.757 0 5-2.243 5-5 0-2.756-2.243-5-5-5S7 2.244 7 5s2.243 5 5 5zm0-8c1.654 0 3 1.347 3 3 0 1.654-1.346 3-3 3S9 6.654 9 5c0-1.653 1.346-3 3-3z" />
      <Path d="M12.293 6.707l1.414-1.414L13 4.586V3h-2v2c0 .266.106.519.293.708l1 .999z" />
      <Path d="M12 11a5.997 5.997 0 0 1-5.91-5H6v18h4v-5h4v5h4V6h-.09A5.997 5.997 0 0 1 12 11zm-1 6H8v-2h3v2zm0-3H8v-2h3v2zm5 3h-3v-2h3v2zm0-3h-3v-2h3v2zM0 24h5V14H0v10zm1-7h3v2H1v-2zM19 14v10h5V14h-5zm4 5h-3v-2h3v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
