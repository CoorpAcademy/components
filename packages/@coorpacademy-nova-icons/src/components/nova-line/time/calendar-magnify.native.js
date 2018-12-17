import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.772 14.763l-1.108-1.108a4.468 4.468 0 0 0 .336-1.69c0-2.481-2.019-4.5-4.5-4.5S7 9.483 7 11.965s2.019 4.5 4.5 4.5c.598 0 1.167-.123 1.69-.335l1.108 1.107c.331.331.77.513 1.237.513s.907-.182 1.237-.513.513-.77.513-1.237-.182-.907-.513-1.237zM9 11.965c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5-2.5-1.122-2.5-2.5z" />
      <Path d="M21 3h-3V1h-2v6h2V5h3v15H3V5h2V3H3a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <Path d="M15 3H8V1H6v6h2V5h7z" />
    </G>
  </Svg>
);

export default SvgComponent;
