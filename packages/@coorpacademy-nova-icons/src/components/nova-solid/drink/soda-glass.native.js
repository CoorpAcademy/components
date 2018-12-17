import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={18} cy={4} r={1} />
      <Circle cx={15} cy={3} r={1} />
      <Path d="M19.756 6.345A1.003 1.003 0 0 0 19 6h-7.592l-.417-3.132A1 1 0 0 0 10 2H4v2h5.125l.266 2H7a1.003 1.003 0 0 0-.99 1.142l2 14c.07.493.492.858.99.858h8c.498 0 .92-.365.99-.858l2-14a1.003 1.003 0 0 0-.234-.797zM8.439 10l-.287-2h1.506l.266 2H8.439zM10 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm2 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2.562-6h-5.619l-.267-2h6.172l-.286 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
