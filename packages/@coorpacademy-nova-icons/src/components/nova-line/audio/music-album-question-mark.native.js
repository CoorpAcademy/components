import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.018 12.482l-5 1.63a.75.75 0 0 0-.518.713V18A1.5 1.5 0 1 0 7 19.5v-4.131l3.5-1.141V17a1.5 1.5 0 1 0 1.5 1.5v-5.306a.747.747 0 0 0-.982-.712z" />
      <Path d="M14 9H2c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V11c0-1.102-.897-2-2-2zM2 22V11h12l.001 11H2zM20 0c-2.206 0-4 1.795-4 4h2c0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2h-1v3h2V7.874A4.008 4.008 0 0 0 24 4c0-2.205-1.794-4-4-4z" />
      <Circle cx={20} cy={11} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
