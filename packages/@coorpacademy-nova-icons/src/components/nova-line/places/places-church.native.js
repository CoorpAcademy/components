import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M21.316 13.05L17 11.611V7.999a.999.999 0 0 0-.4-.799L13 4.499v-2.5h-2v2.5L7.4 7.2a.996.996 0 0 0-.4.799v3.614L2.684 13.05a1.001 1.001 0 0 0-.684.949v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7c0-.43-.276-.812-.684-.949zM4 14.72l3-.999v6.278H4V14.72zm5 5.279v-11.5l3-2.25 3 2.25v11.5H9zm11 0h-3V13.72l3 1v5.279z" />
      <Path d="M13 7.999h-2v2h-1v2h1v3h2v-3h1v-2h-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
