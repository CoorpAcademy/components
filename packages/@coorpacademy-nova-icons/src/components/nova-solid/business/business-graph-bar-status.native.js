import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 7c.365 0 .704-.105.999-.277l4.002 2.288A2 2 0 0 0 14 9c0-.178-.031-.346-.074-.512l4.562-4.562c.164.044.334.074.512.074a2 2 0 1 0-2-2c0 .178.031.348.074.512l-4.562 4.562A2.055 2.055 0 0 0 12 7.001c-.365 0-.704.105-.999.277L6.999 4.992A2 2 0 1 0 5 7zM2 22h20v2H2zM10 15h4v6h-4zM16 9h4v12h-4zM4 13h4v8H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
