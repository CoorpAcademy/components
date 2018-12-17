import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2C6.486 2 2 6.487 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.513-4.486-10-10-10zm5 13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h.382a.999.999 0 0 0 .895-.552l.447-.895c.169-.338.516-.553.895-.553h2.764a1 1 0 0 1 .895.553l.447.895a.995.995 0 0 0 .893.552H16a1 1 0 0 1 1 1v5z" />
      <Circle cx={12} cy={12} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
