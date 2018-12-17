import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M22 14a2.98 2.98 0 0 0-1-2.219V10c0-2.757-2.243-5-5-5H8c-2.757 0-5 2.243-5 5v1.781A2.98 2.98 0 0 0 2 14c0 .883.391 1.67 1 2.22V18c0 1.103.896 2 2 2h14c1.104 0 2-.897 2-2v-1.78c.609-.55 1-1.337 1-2.22zM5 10c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v1H5v-1zm14 5H5c-.551 0-1-.449-1-1 0-.551.449-1 1-1h14c.551 0 1 .449 1 1 0 .551-.449 1-1 1zm0 3H5v-1h14v1z" />
      <Circle cx={7.75} cy={9.75} r={0.75} />
      <Circle cx={9.75} cy={8.25} r={0.75} />
      <Circle cx={12} cy={9.75} r={0.75} />
      <Circle cx={14} cy={8.25} r={0.75} />
      <Circle cx={16.25} cy={9.75} r={0.75} />
    </G>
  </Svg>
);

export default SvgComponent;
