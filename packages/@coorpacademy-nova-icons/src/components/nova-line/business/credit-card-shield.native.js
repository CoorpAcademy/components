import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 8h7v2H3zM3 11h5v2H3z" />
      <Path d="M2 7h15.998v2H20V2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v12c0 1.103.896 2 2 2h8v-2H2V7zm16-5l-.001 3H2V2h16z" />
      <Path d="M12 11v7c0 3.813 3.797 5.579 5.805 5.98l.195.04.195-.04C20.203 23.579 24 21.813 24 18v-7H12zm10 7c0 2.766-3.158 3.758-4 3.974-.842-.216-4-1.208-4-3.974v-5h8v5z" />
      <Path d="M17 20h2v-2h2v-2h-2v-2h-2v2h-2v2h2zM13 8h4v1h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
