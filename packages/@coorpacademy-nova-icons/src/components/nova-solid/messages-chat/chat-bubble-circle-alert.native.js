import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.998 14h-2c-1.1 0-2-.9-2-2V7.218a10.777 10.777 0 0 0-5-1.218c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.573 4.836L-.002 24h11c5.514 0 10-4.037 10-9 0-.416-.042-.822-.103-1.223a1.968 1.968 0 0 1-.897.223zM17.998 3h2v6h-2z" />
      <Circle cx={18.998} cy={11} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
