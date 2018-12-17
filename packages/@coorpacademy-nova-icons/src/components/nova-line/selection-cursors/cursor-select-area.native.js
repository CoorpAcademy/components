import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.414 21.001l-3.207-3.207 1.439-1.439c.194-.194.137-.415-.127-.491l-6.039-1.725c-.264-.076-.418.079-.344.343l1.727 6.039c.074.264.296.321.49.127l1.439-1.44L21 22.416l1.414-1.415zM2 3.001v3h2v-2h2v-2H3a1 1 0 0 0-1 1zM4 14.001H2v3a1 1 0 0 0 1 1h3v-2H4v-2zM8 2.001h4v2H8zM2 8.001h2v4H2zM16 6.001h2v-3a1 1 0 0 0-1-1h-3v2h2v2zM16 8.001h2v4h-2zM8 16.001h4v2H8z" />
    </G>
  </Svg>
);

export default SvgComponent;
