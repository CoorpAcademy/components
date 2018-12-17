import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 7.228v.358l-1.293-1.292-1.414 1.412L19 11.414l3.707-3.708-1.414-1.412L20 7.586v-.358C20 3.954 18.131 2 15 2h-1v2h1c.742 0 3 0 3 3.228zM19 13h-6v2h6v5H5v-2H3v2c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5c0-1.102-.897-2-2-2z" />
      <Path d="M9 16c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2H3c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h6zM3 4h6l.001 10H3V4z" />
    </G>
  </Svg>
);

export default SvgComponent;
