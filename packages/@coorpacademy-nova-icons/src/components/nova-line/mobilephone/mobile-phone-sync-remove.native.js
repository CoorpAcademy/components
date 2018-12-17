import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 4h-5c-1.103 0-2 .896-2 2v2h2V6h5l.001 12H15v-2h-2v2c0 1.104.897 2 2 2h5c1.103 0 2-.896 2-2V6c0-1.104-.897-2-2-2zM9.001 16v2H4V6h5v2h2V6c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v12c0 1.104.897 2 2 2h5c1.103 0 2-.896 2-2v-2H9.001z" />
      <Path d="M14.707 10.707l-1.414-1.414L12 10.586l-1.293-1.293-1.414 1.414L10.586 12l-1.293 1.293 1.414 1.414L12 13.414l1.293 1.293 1.414-1.414L13.414 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
