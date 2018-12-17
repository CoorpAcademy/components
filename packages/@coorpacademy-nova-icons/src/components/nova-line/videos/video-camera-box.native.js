import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 20H4v-6H2v6c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6h-2v6zM20 2H4c-1.103 0-2 .896-2 2v6h2V4h16v6h2V4c0-1.104-.897-2-2-2z" />
      <Path d="M14 8H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-.612l1.684.562a.993.993 0 0 0 .9-.139A.998.998 0 0 0 18 14v-4a1 1 0 0 0-1.316-.948L15 9.612V9a1 1 0 0 0-1-1zm-1 6H8v-4h5v4zm3-2.612v1.226l-1-.334v-.559l1-.333z" />
    </G>
  </Svg>
);

export default SvgComponent;
