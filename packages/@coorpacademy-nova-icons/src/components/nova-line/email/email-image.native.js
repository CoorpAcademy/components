import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.424 10.094a1.001 1.001 0 0 0-1.064.137L14.639 15H9.361L3.64 10.231A1 1 0 0 0 2 11v9c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2v-9a1 1 0 0 0-.576-.906zM4 20v-6.865l4.359 3.634c.18.148.407.231.641.231h6c.234 0 .461-.082.641-.231L20 13.134 20.002 20H4zM6 4h12v5h2V2H4v7h2z" />
      <Path d="M9.065 8.665L7 11.978h10L13.273 6l-2.935 4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
