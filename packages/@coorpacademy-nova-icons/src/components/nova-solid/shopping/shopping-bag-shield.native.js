import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 2c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S4 2.243 4 5h2c0-1.654 1.346-3 3-3zM12 9h5.215L17 6H1L0 20h10.365A5.819 5.819 0 0 1 10 18v-7a2 2 0 0 1 2-2z" />
      <Path d="M12 10.981v7c0 3.812 3.797 5.579 5.804 5.98L18 24l.196-.039C20.203 23.56 24 21.793 24 17.98v-7H12zm9 6.999h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
