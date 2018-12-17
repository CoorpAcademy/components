import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 4H5C2.794 4 1 5.795 1 8c0 1.745 1.13 3.217 2.692 3.762L1.613 18H9v-2h1c2.206 0 4-1.795 4-4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-6 10H9v-2h3c0 1.104-.897 2-2 2zM10 19H1a1 1 0 0 0-.895 1.448l1 2c.17.338.516.552.895.552h7a.998.998 0 0 0 .894-.553l1-2A1 1 0 0 0 10 19zM23 7h-3.178A3.006 3.006 0 0 0 18 5.186v5.631a3.019 3.019 0 0 0 1.822-1.816H23V7z" />
    </G>
  </Svg>
);

export default SvgComponent;
