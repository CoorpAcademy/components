import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 9V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h8v-3H3l3-4 2 2 2-2.5V11c0-1.1.9-2 2-2h6zm-6-8l5 5h-5V1zM5.5 13A2.498 2.498 0 0 1 3 10.5a2.499 2.499 0 1 1 5 0A2.5 2.5 0 0 1 5.5 13z" />
      <Path d="M12 10.998v7c0 3.813 3.797 5.58 5.804 5.981l.196.04.196-.039C20.203 23.578 24 21.812 24 17.999v-7H12zm9 7.001h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
