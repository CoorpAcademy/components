import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 18.001c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2v-8H2v8zm13-6h4v2h-4v-2zm-10 0h7v2H5v-2zm0 3h5v2H5v-2zM20 4.001H4c-1.103 0-2 .897-2 2v2h20v-2c0-1.103-.896-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
