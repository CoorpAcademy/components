import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 2c-.188 0-.371.053-.53.152l-8 5a1 1 0 0 0 .083 1.742l2 1c.237.118.512.138.764.055L11.162 8h1.945l-1.934 2.835a1 1 0 0 0 .119 1.271l1 1a.997.997 0 0 0 1.347.06l3.957-3.297L15.991 2H11zM23.98 8.639L22.381.801a1 1 0 0 0-1.18-.781l-2.94.6c-.26.054-.488.208-.634.43-.146.221-.199.491-.146.75l1.599 7.84a.994.994 0 0 0 .429.633.995.995 0 0 0 .751.145l2.939-.6a1 1 0 0 0 .781-1.179z" />
      <Circle cx={8.5} cy={16} r={1.5} />
      <Circle cx={11.5} cy={19.5} r={1.5} />
      <Circle cx={8.5} cy={22.5} r={1.5} />
      <Circle cx={14.5} cy={22.5} r={1.5} />
      <Circle cx={2.5} cy={22.5} r={1.5} />
      <Circle cx={5.5} cy={19.5} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
