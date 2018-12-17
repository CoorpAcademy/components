import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.526 10.152a1.003 1.003 0 0 0-.973-.044L18 11.885v-.882c0-1.104-.897-2-2-2H6c-1.103 0-2 .896-2 2v6c0 1.103.897 2 2 2h3.822l-5 5H7.65l3.35-3.35 3.35 3.35h2.828l-5-5H16c1.103 0 2-.897 2-2v-.882l3.553 1.777a1.008 1.008 0 0 0 .973-.044c.294-.183.474-.504.474-.851v-6c0-.347-.18-.668-.474-.851zM7 8.003c2.206 0 4-1.794 4-4 0-2.205-1.794-4-4-4s-4 1.795-4 4 1.794 4 4 4zM15 8.003c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
