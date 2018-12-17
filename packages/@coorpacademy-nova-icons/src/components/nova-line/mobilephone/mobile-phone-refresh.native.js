import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.999 18H2v-2h6.999v-2H2V6h8v3h2V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h6.999v-2zM2 2h8v2H2V2zM17 21c-1.077 0-2.064-.44-2.811-1.189L16 18h-5v5l1.761-1.762A5.942 5.942 0 0 0 17 23c3.309 0 6-2.691 6-6h-2c0 2.205-1.794 4-4 4zM21.24 12.76A5.945 5.945 0 0 0 17 11c-3.309 0-6 2.691-6 6h2c0-2.205 1.794-4 4-4 1.078 0 2.065.44 2.811 1.188L18 16h5v-5l-1.76 1.76z" />
    </G>
  </Svg>
);

export default SvgComponent;
