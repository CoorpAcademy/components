import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.414 21.001l-3.207-3.207 1.439-1.44c.194-.194.137-.415-.127-.491l-6.039-1.726c-.264-.076-.418.079-.344.344l1.727 6.038c.074.265.296.322.49.128l1.439-1.44L21 22.416l1.414-1.415zM8 2.001h3v2H8zM8 20.001h3v2H8zM13 2.001h3v2h-3zM2 8.002h2v3H2zM20 8.002h2v3h-2zM2 13.002h2v3H2zM2 3.001v3h2v-2h2v-2H3a1 1 0 0 0-1 1zM4 18.001H2v3a1 1 0 0 0 1 1h3v-2H4v-2zM20 6.002h2v-3a1 1 0 0 0-1-1h-3v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
