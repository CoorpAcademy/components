import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 10C6.486 10 2 14.486 2 20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1c0-5.514-4.486-10-10-10z" />
      <Path d="M12 9c3.109 0 6.091 1.337 8.181 3.667l1.489-1.335a13.023 13.023 0 0 0-6.316-3.868A1.99 1.99 0 0 0 16 6a2 2 0 1 0-4 0c0 .372.108.717.286 1.015C12.19 7.013 12.096 7 12 7s-.19.013-.286.015C11.892 6.717 12 6.372 12 6a2 2 0 1 0-4 0c0 .58.251 1.098.646 1.464a13.025 13.025 0 0 0-6.316 3.869l1.489 1.335A11.01 11.01 0 0 1 12 9z" />
    </G>
  </Svg>
);

export default SvgComponent;
