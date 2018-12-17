import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18 14h-2v-4h2c2.206 0 4-1.794 4-4s-1.794-4-4-4c-2.205 0-4 1.794-4 4v2h-4V6c0-2.206-1.794-4-4-4-2.205 0-4 1.794-4 4s1.795 4 4 4h2v4H6c-2.205 0-4 1.794-4 4s1.795 4 4 4c2.206 0 4-1.794 4-4v-2h4v2c0 2.206 1.795 4 4 4 2.206 0 4-1.794 4-4s-1.794-4-4-4zm-2-8c0-1.103.897-2 2-2 1.104 0 2 .897 2 2s-.896 2-2 2h-2V6zM8 18c0 1.103-.896 2-2 2-1.103 0-2-.897-2-2s.897-2 2-2h2v2zM8 8H6c-1.103 0-2-.897-2-2s.897-2 2-2c1.104 0 2 .897 2 2v2zm6 6h-4v-4h4v4zm4 6c-1.103 0-2-.897-2-2v-2h2c1.104 0 2 .897 2 2s-.896 2-2 2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
