import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 8V4c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-4H4V8h10zm-2-4v2H4V4h8zm0 14v2H4v-2h8z" />
      <Path d="M16 2.131v7.909a3.153 3.153 0 0 0-.5-.04c-1.381 0-2.5.896-2.5 2s1.119 2 2.5 2 2.5-.896 2.5-2V5.869l1.445.963 1.109-1.664L16 2.131z" />
    </G>
  </Svg>
);

export default SvgComponent;
