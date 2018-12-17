import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle cx={6.291} cy={17.483} r={1} fill="currentColor" />
    <Path
      d="M21.122 2.616c-1.134-1.135-3.111-1.134-4.244 0l-9.117 9.117L2 15.455V22h6.581l3.443-6.044 9.098-9.098A2.987 2.987 0 0 0 22 4.736c0-.802-.312-1.555-.878-2.12zM7.419 20H4v-3.456l4.258-2.75 1.739 1.739L7.419 20zM19.708 5.443l-8.486 8.486L9.793 12.5l8.5-8.471a1.023 1.023 0 0 1 1.415.001c.188.188.292.439.292.706s-.104.518-.292.707z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
