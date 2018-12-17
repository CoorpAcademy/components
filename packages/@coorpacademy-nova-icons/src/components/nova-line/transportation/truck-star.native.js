import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.797 14.929L15 13.46l2.203 1.469-.734-2.413L17.938 11h-2.019L15 9l-1.01 2h-1.928l1.469 1.516z" />
      <Path d="M21 6H9a1 1 0 0 0-1 1v2H6c-2.206 0-4 1.795-4 4v6a1 1 0 0 0 1 1h2.185c.414 1.162 1.513 2 2.815 2s2.401-.838 2.816-2h3.369c.414 1.162 1.514 2 2.815 2s2.401-.838 2.816-2H21a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM4 13c0-1.104.897-2 2-2h2v5a2.993 2.993 0 0 0-2.815 2H4v-5zm4 7c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm9 0c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm3-2h-.184c-.415-1.162-1.514-2-2.816-2s-2.401.838-2.815 2h-3.369A2.99 2.99 0 0 0 10 16.78V8h10v10z" />
      <Path d="M5 12h2v2H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
