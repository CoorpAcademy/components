import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M16.326 10.731A1.998 1.998 0 0 0 14.78 10H7.22a1.998 1.998 0 0 0-1.961 2.394l1.6 8A2.005 2.005 0 0 0 8.82 22h4.359c.952 0 1.776-.677 1.961-1.606l1.601-8.002a1.99 1.99 0 0 0-.415-1.661zM13.18 20H8.82l-1.6-8h7.561l-1.601 8zM14 5c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v4h6V5zm-2 2h-2V5h2v2z" />
      <Circle cx={11} cy={15} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
