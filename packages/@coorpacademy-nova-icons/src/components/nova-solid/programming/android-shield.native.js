import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 5.999a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.963 4.963 0 0 0-.833-2.752l1.54-1.54L12.293.292l-1.54 1.54a4.972 4.972 0 0 0-5.506 0L3.707.292 2.293 1.707l1.54 1.54A4.97 4.97 0 0 0 3 5.999zM12 8.998h4A1 1 0 0 0 15 8H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h1.366A5.84 5.84 0 0 1 10 17.998v-7a2 2 0 0 1 2-2z" />
      <Path d="M12 10.998v7c0 3.811 3.797 5.578 5.804 5.98l.196.038.196-.038c2.008-.402 5.804-2.169 5.804-5.98v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
