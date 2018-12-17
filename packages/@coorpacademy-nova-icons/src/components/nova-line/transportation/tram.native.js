import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M18 8h-4.766l-1.333-2 1.333-2H15V2H9v2h2.432l-1.333 2 1.333 2H6v2h12zM21 18v-6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.185A2.943 2.943 0 0 0 4 20c0 .771.301 1.469.78 2H2v2h19v-2h-2.78c.479-.531.78-1.229.78-2 0-.352-.072-.686-.185-1H20a1 1 0 0 0 1-1zM8 20c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1 1 .449 1 1zm1.22 2c.479-.531.78-1.229.78-2 0-.352-.072-.686-.185-1h3.369A2.966 2.966 0 0 0 13 20c0 .771.301 1.469.78 2H9.22zM17 20c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1 1 .449 1 1zm2-3H4v-4h15v4z" />
      <Path d="M7 14h3v2H7zM13 14h3v2h-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
