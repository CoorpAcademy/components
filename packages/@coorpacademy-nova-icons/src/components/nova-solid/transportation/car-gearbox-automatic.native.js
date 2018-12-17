import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.25 19H17v5h1.25c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5zm0 3.75v-2.5a1.25 1.25 0 0 1 0 2.5zM19.5 13.311l-1.354-2.032a.627.627 0 0 0-1.146.346V16h1.25v-2.31l1.355 2.032a.627.627 0 0 0 .702.251.623.623 0 0 0 .443-.598V11H19.5v2.311zM18.25 6.75h.625c1.034 0 1.875-.841 1.875-1.875S19.909 3 18.875 3H17v5h1.25V6.75zm0-2.5h.625a.626.626 0 0 1 0 1.25h-.625V4.25zM11 13H5V7.816A2.991 2.991 0 0 0 7 5a3 3 0 0 0-6 0c0 1.304.837 2.402 2 2.816V15h6v8h7v-2h-5v-8z" />
    </G>
  </Svg>
);

export default SvgComponent;
