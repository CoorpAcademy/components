import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 8.003h2V9h4V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h8v-4H8v-4h2v-1.997H7v-4h3V11c0-1.1.9-2 2-2v-.997zM12 1l5 5h-5V1zM3 8.003h2v4H3v-4zM6 18H3v-4h3v4z" />
      <Path d="M12 11v7c0 3.812 3.797 5.579 5.804 5.98l.196.04.196-.039C20.203 23.579 24 21.812 24 18v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
