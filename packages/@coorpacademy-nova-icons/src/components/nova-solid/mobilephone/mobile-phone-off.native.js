import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 12.779v-6.78h6.78l2.963-2.963A1.993 1.993 0 0 0 16 1.999H8a2 2 0 0 0-2 2v10.78l2-2zM21.293 2.315L2.822 20.786 4.236 22.2l1.804-1.804A2.002 2.002 0 0 0 8 21.999h8a2 2 0 0 0 2-2V8.436l4.707-4.707-1.414-1.414zM16 17.999H8.438L16 10.436v7.563z" />
    </G>
  </Svg>
);

export default SvgComponent;
