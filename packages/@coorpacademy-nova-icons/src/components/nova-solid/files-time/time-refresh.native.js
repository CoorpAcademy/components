import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.94 10.003c.037-.33.06-.664.06-1.003 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9c.34 0 .674-.022 1.004-.06a7.996 7.996 0 0 1 7.936-7.937zM8 9.535V4h2v4.465l2.555 1.703-1.109 1.663L8 9.535zM18.002 22c-1.077 0-2.065-.44-2.811-1.19L17.002 19h-5v5l1.764-1.764A6.026 6.026 0 0 0 18.002 24c3.308 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4z" />
      <Path d="M22.241 13.761A5.937 5.937 0 0 0 18.002 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.811 1.189L19.002 17h5v-5l-1.761 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
