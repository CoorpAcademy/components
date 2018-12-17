import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <Path
      d="M10-.001H2c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-16c0-1.103-.897-2-2-2zm0 2v2H2v-2h8zm0 4v8H2v-8h8zm-8 12v-2h8.001v2H2zM20 13.999h2v6h-2z"
      fill="currentColor"
    />
    <Circle cx={21} cy={21.999} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
