import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <Path fill="currentColor" d="M3 3h5v2H3zM3 9h5v2H3zM3 15h5v2H3z" />
    <Circle cx={13} cy={4} r={1} fill="currentColor" />
    <Circle cx={16} cy={4} r={1} fill="currentColor" />
    <Circle cx={13} cy={10} r={1} fill="currentColor" />
    <Circle cx={16} cy={10} r={1} fill="currentColor" />
    <Path
      d="M9 18H2v-4h7v-2H2V8h15.999l-.001 3H20V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16c0 1.103.896 2 2 2h7v-2zM2 2h16l-.001 4H2V2zM19 22h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z"
      fill="currentColor"
    />
    <Path
      d="M22.293 19.707L17 14.414l-5.293 5.293-1.414-1.414 6-6a.999.999 0 0 1 1.414 0l6 6-1.414 1.414z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
