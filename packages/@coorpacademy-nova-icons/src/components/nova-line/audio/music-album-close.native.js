import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.705 2.707l-1.414-1.415-2.293 2.294-2.293-2.294-1.414 1.415L16.584 5l-2.293 2.292 1.414 1.415 2.293-2.293 2.293 2.293 1.414-1.415L19.412 5zM11.018 12.481l-5 1.631a.749.749 0 0 0-.518.713V18A1.5 1.5 0 1 0 7 19.5v-4.131l3.5-1.142V17a1.5 1.5 0 1 0 1.5 1.5v-5.306a.75.75 0 0 0-.982-.713z" />
      <Path d="M14 9H2c-1.103 0-2 .897-2 2v11c0 1.102.897 2 2 2h12c1.103 0 2-.898 2-2V11c0-1.103-.897-2-2-2zM2 22V11h12l.001 11H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
