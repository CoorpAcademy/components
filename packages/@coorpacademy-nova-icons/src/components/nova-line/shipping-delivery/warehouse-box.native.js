import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M23.264 5.036l-11-3a1.002 1.002 0 0 0-.527 0l-11 3A.999.999 0 0 0 0 6v2a1 1 0 0 0 1 1v13h2V9h18v13h2V9a1 1 0 0 0 1-1V6a.999.999 0 0 0-.736-.964zM2 6.764l10-2.727 10 2.727V7H2v-.236z" />
      <Path d="M18 15h-2v-4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-8-3h1v2h2v-2h1v3h-4v-3zm-3 5h1v2h2v-2h1v3H7v-3zm10 3h-4v-3h1v2h2v-2h1v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
