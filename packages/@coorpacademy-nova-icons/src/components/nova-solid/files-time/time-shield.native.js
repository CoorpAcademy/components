import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.122 9.213C11.388 9.082 11.684 9 12 9h6c0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9a9.18 9.18 0 0 0 1-.058s.01-7.024.013-7.065L8 9.535V4h2v4.465l1.122.748z" />
      <Path d="M12 11v7c0 3.812 3.797 5.579 5.804 5.98l.196.04.196-.039C20.203 23.579 24 21.812 24 18v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
