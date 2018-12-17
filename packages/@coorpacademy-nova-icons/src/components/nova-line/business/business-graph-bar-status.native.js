import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 21.999v-13a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v13h-1v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7H8v-10a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10H0v2h24v-2h-2zm-18 0v-9h2v9H4zm7 0v-6h2v6h-2zm7 0v-12h2v12h-2z" />
      <Path d="M5 7c.365 0 .704-.105.999-.277l4.002 2.286A1.998 1.998 0 0 0 14 8.999c0-.178-.031-.346-.074-.51l4.563-4.563c.163.043.333.074.511.074a2 2 0 1 0-2-2c0 .178.031.348.074.511l-4.563 4.563A2.002 2.002 0 0 0 12 7c-.365 0-.704.106-.999.277L6.999 4.991A1.999 1.999 0 0 0 3 5a2 2 0 0 0 2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
